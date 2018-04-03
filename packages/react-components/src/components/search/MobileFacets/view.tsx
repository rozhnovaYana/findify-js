import React from 'react';
import { withHandlers } from 'recompose';
import Branch from 'components/common/Branch';
import MapArray from 'components/common/MapArray';
import FacetTitles from 'components/search/MobileFacets/Titles';
import Component from 'components/Facet/Component';
import Button from 'components/Button';
import cx from 'classnames';
import Icon from 'components/Icon';
import Text from 'components/Text';

const FacetContent = ({ active, config, theme }) => (
  <div className={theme.container}>
    <Component
      isExpanded
      type={active.get('type')}
      facet={active}
      config={config}
      theme={{
        range: theme.range,
        expand: theme.expand,
      }}
    />
  </div>
);

export default ({
  theme,
  facets,
  activeFacet,
  selectFacet,
  onReset,
  config,
  meta,
  hideModal,
  total
}) =>
<div className={cx(theme.root, 'mobile')}>
  <div className={theme.header}>

    <div className={theme.title}>
      <Text primary uppercase display-if={!activeFacet}>
        { config.getIn(['facets', 'i18n', 'filters'], 'Filters') }
      </Text>
      <Text secondary uppercase display-if={!activeFacet && total}>
        ({ total })
      </Text>
      <Text primary uppercase display-if={!!activeFacet}>
        { config.getIn(['facets', 'labels', activeFacet.get('name')]) }
      </Text>
    </div>
  
    <Button onClick={activeFacet ? selectFacet : hideModal} >
      <Icon name='ArrowBack' />
    </Button>
  
    <Button
      display-if={meta.get('filters') && meta.get('filters').size}
      onClick={onReset}>
      <Text secondary uppercase>
        { config.getIn(['facets', 'i18n', 'clearAll'], 'Clear All')}
      </Text>
    </Button>

  </div>
  <div className={theme.body}>
    <Branch
      config={config}
      theme={theme}
      selectFacet={selectFacet}
      active={activeFacet}
      facets={facets}
      condition={!!activeFacet}
      right={FacetTitles}
      left={FacetContent} />
  </div>
  <Button className={theme.footer} onClick={hideModal}>
    { config.getIn(['facets', 'i18n', 'showResults'], 'See results')}
  </Button>
</div>