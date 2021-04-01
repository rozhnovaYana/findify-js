/**
 * @module components/search/DesktopFacets
 */
import Branch from 'components/common/Branch';
import MapArray from 'components/common/MapArray';
import Facet from 'components/Facet';
import Sticky from 'components/common/Sticky';
import Title from 'components/search/DesktopFacets/Title';

import { useConfig, useFacets } from '@findify/react-connect';
import { Immutable } from '@findify/store-configuration';
import { useCallback, useMemo, useReducer, useState } from 'react';
import useTranslations from 'helpers/useTranslations';
import { useEvents, emit } from 'helpers/emmiter';

import styles from 'components/search/DesktopFacets/styles.css';

const DefaultContent = ({ theme, children, title }) => (
  <section className={theme.root} role="region" aria-label={title} tabIndex={0}>
    <div className={theme.container}>{children}</div>
  </section>
);

export default ({ theme = styles }) => {
  const { facets, meta, onReset, config } = useFacets<Immutable.SearchConfig>();
  const t = useTranslations();

  const [isHorizontal, isHidable, isSticky, isAccordion] = useMemo(
    () => [
      config.getIn(['facets', 'position']) === 'top',
      config.getIn(['facets', 'hidable']),
      config.getIn(['facets', 'sticky']),
      config.getIn(['facets', 'accordion']),
    ],
    []
  );

  const [visible, setVisible] = useState(true);

  /** Generate initial list of opened facets */
  const [openFacets, setFacetsStates] = useState(
    config
      .getIn(['facets', 'filters'])
      .filter((f) => !f.get('initiallyCollapsed'))
      .keySeq()
      .toArray()
  );

  const toggleFacet = (name) =>
    setFacetsStates((facets) => {
      const isOpen = facets.includes(name);
      if (isAccordion) return isOpen ? [] : [name];
      return isOpen ? [...facets.filter((k) => k !== name)] : [...facets, name];
    });

  useEvents({
    showFacets: () => setVisible(true),
    toggleFacet: (name) => toggleFacet(name),
  });

  const hideFacets = useCallback(() => {
    emit('hideFacets');
    setVisible(false);
  }, []);

  return (
    <Branch
      display-if={!isHidable || visible}
      theme={{
        container: theme.container,
        root: isHorizontal ? theme.horizontal : theme.root,
      }}
      condition={isSticky}
      title={t('Filters')}
      left={Sticky}
      right={DefaultContent}
      stickToTop={isHorizontal}
      offset={isHorizontal ? 0 : 25}
    >
      <Title
        meta={meta}
        theme={theme}
        onReset={onReset}
        onHide={hideFacets}
        hidable={isHidable}
      />

      <MapArray
        array={facets}
        factory={Facet}
        config={config}
        isHorizontal={isHorizontal}
        onToggle={toggleFacet}
        keyAccessor={(i) => i.get('name')}
        mapProps={(i) => ({
          config: config.getIn(['facets', 'filters', i.get('name')], new Map()),
          isOpen: openFacets.includes(i.get('name')),
        })}
      />
    </Branch>
  );
};