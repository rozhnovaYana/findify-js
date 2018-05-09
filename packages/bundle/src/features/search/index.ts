import { createElement } from 'react';
import { SearchProvider, RecommendationProvider, ContentProvider } from "@findify/react-connect";
import { Recommendation as RecommendationAgent } from "@findify/agent";
import { getQuery, setQuery, isSearch, listenHistory } from '../../core/location';
import { hideFallback, showFallback } from '../../helpers/fallbackNode';
import { Events } from '../../core/events';
import { scrollTo } from '../../helpers/scrollTo';

const applyState = (state, agent) => {
  agent.reset();
  for (const key in state) agent.set(key, state[key]);
}
const createFallbackAgent = (config, node) => new RecommendationAgent({
  key: config.get('key'),
  immutable: true,
  user: __root.analytics.user
})
.defaults({ ...config.get('meta').toJS(), type: config.get('zeroResultsType') })
.on('change:items', () => hideFallback(node));

export default async () => {
  const { default: Search } = await import(
    /* webpackChunkName: "search" */
    '@findify/react-components/src/layouts/Search'
  );
  const { default: ZeroResults } = await import(
    /* webpackChunkName: "zero-results" */
    '@findify/react-components/src/layouts/Search'
  );
  return (widget, render) => {
    const { agent, config, node } = widget;
    const state = getQuery();
    const apiKey = config.get('key');
    const props = { agent, apiKey, config };

    if (!isSearch()) {
      showFallback(node);
      return null;
    }

    /** Setup initial request */
    applyState(state, agent);

    /** Listen to changes */
    agent.on('change:query', q => setQuery(q.toJS()));
    agent.on('change:redirect', async (redirect, meta) => {
      render();
      await __root.analytics.sendEvent('redirect', {
        ...redirect.toJS(),
        rid: meta.get('rid'),
        suggestion: meta.get('q')
      });
      document.location.href = redirect.get('url');
    });

    /** Listen to location back/fwd */
    const stopListenLocation = listenHistory((_, action) => {
      if (action !== 'POP') return;
      applyState(getQuery(), agent);
      render('initial');
    });

    /** Switch to recommendation if query not present */
    agent.on('change:items', (items) => {
      if (!items.isEmpty()) {
        hideFallback(node);
        if (!config.getIn(['view', 'infinite']) && config.get('scrollTop') !== false) {
          scrollTo(config.get('cssSelector'), config.get('scrollTop'))
        }
        return render('initial');
      }
      const agent = createFallbackAgent(config, node);

      return render(
        RecommendationProvider,
        { agent, apiKey, config },
        createElement(ZeroResults, getQuery())
      );
    })

    /** Unsubscribe from events on instance destroy  */
    const unsubscribe = __root.listen((event, prop, ...args) => {
      if (event !== Events.detach || prop !== widget) return;
      stopListenLocation();
      unsubscribe();
    })

    /** Render */

    return createElement(SearchProvider, props, createElement(Search))
  }
}
