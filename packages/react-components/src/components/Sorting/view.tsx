/**
 * @module components/Sorting
 */

import Icon from 'components/Icon';
import Text from 'components/Text';
import Dropdown from 'components/Dropdown';
import { MJSConfiguration, ISortingItem, ThemedSFCProps } from 'types';
import { List } from 'immutable';
import useTranslations from 'helpers/useTranslations';

/** List of props Sorting view accepts */
export interface ISortingProps extends ThemedSFCProps {
  /** Callback called when sorting is changed */
  onChangeSort?: (value: any) => void;
  /** MJS configuration */
  config: MJSConfiguration;
  /** List of Sorting configurations */
  items: List<ISortingItem>;
  /** Current selected sorting configuration */
  selectedItem: ISortingItem;
}

const Sorting = ({
  onChangeSort,
  theme,
  items,
  selectedItem,
}: ISortingProps) => {
  const t = useTranslations();
  console.log(t('sortBby'));
  return (
    <div className={theme.root}>
      <Icon name="Sorting" className={theme.icon} title="Sorting" />
      <Text primary uppercase className={theme.title}>
        {t('sort by')}:
      </Text>
      <Dropdown
        className={theme.dropdown}
        items={items}
        onChange={onChangeSort}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Sorting;
