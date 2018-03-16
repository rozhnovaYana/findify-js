import { createElement } from 'react';
import { hot } from 'react-hot-loader';
import { compose, withProps, withStateHandlers, setDisplayName } from 'recompose';
import { connectConfig } from '@findify/react-connect';
import withEvents from 'helpers/withEvents';
import view from './view';

const Search = compose(
  setDisplayName('Search'),

  connectConfig,

  withEvents({
    trololo: (props) => (...data) => {
      console.log(props, data)
    }
  }),

  withStateHandlers(
    { mobileFacetsVisible: false },
    { showMobileFacets: () => () => ({ mobileFacetsVisible: true })}
  ),

  withProps(({ config }) => ({
    isMobile: config.get('forceMobile') || window.innerWidth <= config.get('mobileBreakpoint')
  }))
)(view);

export default hot(module)(Search)
