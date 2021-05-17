declare module 'components/autocomplete/ProductMatches' {
  /// <reference types="react" />
  const _default: ({
    theme,
    config,
    padded,
  }: {
    theme?: Record<string, string> | undefined;
    config: any;
    padded?: boolean | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/autocomplete/SearchSuggestions' {
  /**
   * @module components/autocomplete/SearchSuggestions
   */
  /// <reference types="react" />
  const _default: ({
    selectedSuggestion,
    theme,
    template,
  }: {
    selectedSuggestion?: undefined;
    theme?: Record<string, string> | undefined;
    template?: string | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/autocomplete/SearchSuggestions/test' {
  export {};
}
declare module 'components/autocomplete/SuggestionItem' {
  /// <reference types="react" />
  import { ISuggestion, ISuggestionProps, IQuery, ThemedSFCProps } from 'types';
  /**
   * Props that SuggestionItem accepts
   */
  export interface ISuggestionItemProps
    extends ThemedSFCProps,
      ISuggestionProps {
    /** Suggestion item */
    item: ISuggestion;
    /** Query, used to highlight matches */
    query: IQuery;
    /** Flag indicating whether current suggestion is in focus over keyboard arrows */
    selectedSuggestion: number;
    /** Icon name to use */
    icon: string;
    /** Flag indicating that this suggestion is used in TrendingSearches layout of Autocomplete */
    isTrendingSearches: boolean;
    /** Rest of the props that may get passed down */
    [x: string]: any;
  }
  const _default: ({
    item,
    query,
    theme,
    selectedSuggestion,
    index,
    onClick,
    icon,
    isTrendingSearches,
  }: ISuggestionItemProps) => JSX.Element;
  export default _default;
}
declare module 'components/autocomplete/SuggestionItem/test' {
  export {};
}
declare module 'components/autocomplete/Tip' {
  /**
   * @module components/autocomplete/Tip
   */
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  /** List of props that Tip accepts */
  export interface ITipProps extends ThemedSFCProps {
    /** Custom title to display in a Tip */
    widgetKey: string;
    title: string;
    zeroResultsTitle: string;
  }
  const _default: ({
    className,
    title,
    zeroResultsTitle,
    theme,
    widgetKey,
  }: ITipProps) => JSX.Element;
  export default _default;
}
declare module 'components/autocomplete/Tip/test' {
  export {};
}
declare module 'components/Banner' {
  /**
   * @module components/Banner
   */
  /// <reference types="react" />
  const _default: import('react').MemoExoticComponent<
    ({
      theme,
    }: import('../../types').IThemedSFCProps<
      import('../../types').Theme
    >) => JSX.Element
  >;
  export default _default;
}
declare module 'components/Breadcrumbs/createBreadcrumb' {
  /**
   * @module components/Breadcrumbs
   */
  /// <reference types="react" />
  import { FilterType, ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
  /** Filter mapping type */
  export type FilterMapping = {
    [x in FilterType]: React.SFC<any>;
  };
  export interface IFilterProps {
    /** Filter value */
    item: any;
    /** Filter mapping */
    mapping: FilterMapping;
    /** Filter type */
    type: FilterType;
    /** Filter name */
    name: string;
  }
  /** List of props that component returned by createBreadcrumb accepts */
  export interface IFilterListProps extends ThemedSFCProps {
    /** Filter to create a component for */
    item: IFacet;
    /** MJS configuration */
    config: MJSConfiguration;
  }
  const _default: (
    mapping: FilterMapping
  ) => ({ item, theme, config }: IFilterListProps) => JSX.Element;
  export default _default;
}
declare module 'components/Breadcrumbs' {
  /**
   * @module components/Breadcrumbs
   */
  /// <reference types="react" />
  const _default: import('react').MemoExoticComponent<
    ({
      theme,
    }: import('../../types').IThemedSFCProps<
      import('../../types').Theme
    >) => JSX.Element
  >;
  export default _default;
}
declare module 'components/Button' {
  /**
   * @module components/Button
   */
  /// <reference types="react" />
  import { ClassnamedProps, ThemedSFCProps } from 'types';
  /** Props that Button accepts */
  export interface IButtonProps extends ThemedSFCProps, ClassnamedProps {
    /** Event handler for a button */
    onClick?: (evt: Event) => any;
    /** Flag to show if the button is active */
    active?: boolean;
    /** Flag whether to use raw style */
    raw?: boolean;
    /** Flag whether the component is disabled */
    disabled?: boolean;
    /** Rest of the props for the button */
    [x: string]: any;
  }
  const _default: ({
    theme,
    onClick,
    children,
    active,
    raw,
    className,
    disabled,
    href,
    ...rest
  }: IButtonProps) => import('react').ReactElement<
    {
      onClick: ((evt: Event) => any) | undefined;
      disabled: boolean | undefined;
      children: import('react').ReactNode;
      href: any;
      className: any;
      'display-if'?: boolean | undefined;
    },
    | string
    | ((props: any) => import('react').ReactElement<any, any> | null)
    | (new (props: any) => import('react').Component<any, any, any>)
  >;
  export default _default;
}
declare module 'components/Cards/Content' {
  /**
   * @module components/Cards/Content
   */
  /// <reference types="react" />
  const _default: ({
    item,
    config,
    theme,
  }: {
    item: any;
    config: any;
    theme?: Record<string, string> | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product/Description' {
  /// <reference types="react" />
  const _default: ({
    text,
    theme,
    ...rest
  }: {
    [x: string]: any;
    text: any;
    theme: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product' {
  /**
   * @module components/Cards/Product
   */
  /// <reference types="react" />
  import { IProduct, ThemedSFCProps } from 'types';
  import { Immutable, Product } from '@findify/store-configuration';
  export interface IProductCardProps extends ThemedSFCProps {
    item: IProduct;
    config: Immutable.Factory<Product>;
    Container?: React.ElementType;
  }
  const _default: ({
    item,
    theme,
    className,
    config,
    Container,
  }: IProductCardProps) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product/Price' {
  /**
   * @module components/Cards/Product/Price
   */
  /// <reference types="react" />
  import { IProduct, ThemedSFCProps } from 'types';
  /** List of props that Price component accepts */
  export interface IPriceProps extends ThemedSFCProps {
    item: IProduct;
  }
  const _default: ({ className, theme, item }: IPriceProps) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product/Rating' {
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  /** List of props that Rating component accepts */
  export interface IRatingProps extends ThemedSFCProps {
    /** Rating value */
    value: number;
    /** Total reviews */
    count: number;
  }
  const _default: ({
    value,
    count,
    className,
    theme,
  }: IRatingProps) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product/Rating/test' {
  export {};
}
declare module 'components/Cards/Product/Stickers' {
  /**
   * @module components/Cards/Product/Stickers
   */
  /// <reference types="react" />
  export const DiscountSticker: ({
    theme,
    ...props
  }: {
    [x: string]: any;
    theme?: {} | undefined;
  }) => import('react').CElement<
    {
      theme: any;
    },
    import('react').Component<
      {
        theme: any;
      },
      any,
      any
    >
  >;
  export const OutOfStockSticker: ({
    theme,
    ...props
  }: {
    [x: string]: any;
    theme?: {} | undefined;
  }) => import('react').CElement<
    {
      theme: any;
    },
    import('react').Component<
      {
        theme: any;
      },
      any,
      any
    >
  >;
}
declare module 'components/Cards/Product/test' {
  export {};
}
declare module 'components/Cards/Product/Title' {
  /// <reference types="react" />
  const _default: ({
    onClick,
    theme,
    href,
    text,
    ...rest
  }: {
    [x: string]: any;
    onClick: any;
    theme: any;
    href: any;
    text: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Cards/Product/Variants' {
  /// <reference types="react" />
  const _default: ({
    item,
    config,
    theme,
  }: {
    item: any;
    config: any;
    theme?: Record<string, string> | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/CategoryFacet/content' {
  /**
   * @module components/CategoryFacet
   */
  /**
   * Used to extract content from facet data
   */
  const extractContent: ({ item }: { item: any }) => any;
  export default extractContent;
}
declare module 'components/CategoryFacet' {
  /// <reference types="react" />
  import { IFacet, ThemedSFCProps, MJSConfiguration } from 'types';
  import { List, Map } from 'immutable';
  /** CategoryFacet props */
  export interface ICategoryFacetProps extends ThemedSFCProps {
    /** Categories facet */
    facet: IFacet;
    /** Facet items */
    items: List<Map<string, string | boolean | number>>;
    /** Total count of selected facets */
    total: number;
    /** MJS Configuration */
    config: MJSConfiguration;
    /** Flag shows whether search functionality is enabled */
    isExpanded?: boolean;
    /** Callback invoked on request to expand list completely */
    onToggle: (evt: Event) => any;
    hidden: boolean;
    isMobile?: boolean;
  }
  const _default: ({
    theme,
    config,
    facet,
    hidden,
    isMobile,
  }: ICategoryFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/CategoryFacet/Item' {
  /// <reference types="react" />
  import { ThemedSFCProps, MJSConfiguration } from 'types';
  /** This is a list of props that each individual child of CategoryFacet View accepts */
  export interface ICategoryFacetCategoryProps extends ThemedSFCProps {
    /** TODO: add typings for Item here */
    item: any;
    /** Custom inline styles for Button holding CategoryFacet Item */
    style: {
      [x: string]: string | number;
    };
    /** MJS Configuration */
    config: MJSConfiguration;
    isMobile?: boolean;
  }
  const Item: ({
    item,
    theme,
    style,
    config,
    isMobile,
  }: ICategoryFacetCategoryProps) => JSX.Element;
  export default Item;
}
declare module 'components/CheckboxFacet/content' {
  /**
   * @module components/CheckboxFacet
   */
  /**
   * Used to extract content from facet data
   */
  const extractContent: ({ item }: { item: any }) => any;
  export default extractContent;
}
declare module 'components/CheckboxFacet' {
  /**
   * @module components/CheckboxFacet
   */
  import { ChangeEvent } from 'react';
  import { ThemedSFCProps, MJSConfiguration, IFacet } from 'types';
  /** Props that CheckboxFacet accepts */
  export interface ICheckboxFacetProps extends ThemedSFCProps {
    facet: IFacet;
    /** MJS Configuration */
    config: MJSConfiguration;
    /** Search string for filtering facet values */
    search?: string;
    /** Flag shows whether search functionality is enabled */
    isExpanded?: boolean;
    /** Flag to show if facet is opened on mobile */
    isMobile?: boolean;
    /** Callback invoked on search input change */
    onSearch: (evt: ChangeEvent<HTMLInputElement>) => any;
    /** Callback invoked on request to expand list completely */
    onToggle: (evt: Event) => any;
    hidden: boolean;
  }
  const _default: ({
    theme,
    config,
    isMobile,
    facet,
    hidden,
  }: ICheckboxFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/ColorFacet/content' {
  /**
   * @module components/ColorFacet
   */
  /// <reference types="react" />
  const _default: import('react').NamedExoticComponent<object>;
  export default _default;
}
declare module 'components/ColorFacet' {
  /**
   * @module components/ColorFacet
   */
  /// <reference types="react" />
  import { ThemedSFCProps, MJSConfiguration, IFacetValue, IFacet } from 'types';
  import { List } from 'immutable';
  export interface IColorFacetProps extends ThemedSFCProps {
    /** MJS Configuration */
    config: MJSConfiguration;
    /** Facet values to render */
    items: List<IFacetValue>;
    facet: IFacet;
    hidden: boolean;
    isMobile?: boolean;
  }
  const _default: ({
    config,
    facet,
    hidden,
    theme,
    isMobile,
  }: IColorFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/ColorFacet/Item' {
  /**
   * @module components/ColorFacet
   */
  /// <reference types="react" />
  /** Props that ColorFacet Item accepts */
  import { IFacetValue, MJSConfiguration, ThemedSFCProps } from 'types';
  export interface IColorFacetItemProps extends ThemedSFCProps {
    /** Facet to render */
    item: IFacetValue;
    /** MJS Configuration */
    config: MJSConfiguration;
    /** Is mobile breakpoint activated */
    isMobile?: boolean;
  }
  const Item: ({
    item,
    theme,
    config,
    isMobile,
  }: IColorFacetItemProps) => JSX.Element;
  export default Item;
}
declare module 'components/common/Announcement' {
  /// <reference types="react" />
  export const Component: ({ text }: { text: any }) => JSX.Element;
  export const useAnnouncement: () => [JSX.Element, (text: any) => void];
  export default Component;
}
declare module 'components/common/Branch' {
  /**
   * @module components/common/Branch
   */
  /// <reference types="react" />
  /** Props that Branch component accepts */
  export interface IBranchProps {
    /**
     * Use display-if to hide a component.
     * When property is not defined or is set to true - component is rendered,
     * when it is false - hidden
     */
    'display-if'?: boolean;
    /** Component to render in case **condition** is true */
    left?: React.ComponentType;
    /** Component to render in case **condition** is false */
    right?: React.ComponentType;
    /** Boolean value to test against */
    condition?: boolean;
    /** Rest props to be passed to rendered component */
    [x: string]: any;
  }
  const Branch: ({
    left,
    right,
    children,
    condition,
    ...props
  }: IBranchProps) => JSX.Element;
  export default Branch;
}
declare module 'components/common/Checkbox' {
  /**
   * @module components/CheckboxFacet
   */
  /// <reference types="react" />
  import { IFacetValue, ThemedSFCProps } from 'types';
  /** Props that CheckboxFacet Item accepts */
  export interface ICheckboxFacetItemProps extends ThemedSFCProps {
    /** Single item from facet */
    item: IFacetValue;
    /** CheckboxFacet Item click handler */
    onItemClick?: (evt: Event) => any;
    /** Custom inline style */
    style: {
      [x: string]: string | number;
    };
    content: (x: any) => string;
    config: Map<string, any>;
    isMobile?: boolean;
  }
  const _default: ({
    item,
    theme,
    style,
    onItemClick,
    content,
    config,
    isMobile,
  }: ICheckboxFacetItemProps) => JSX.Element;
  export default _default;
}
declare module 'components/common/Drawer' {
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  /** This is a state definition for DrawerView */
  export interface IDrawerViewState {
    /** Flag whether Drawer is open */
    open: boolean;
  }
  /** List of props that DrawerView accepts */
  export interface IDrawerViewProps extends ThemedSFCProps {
    /** Additional options for DrawerView */
    options?: {
      /** Transition from styles */
      from: {
        [x: string]: string | number;
      };
      /** Transition to styles */
      to: {
        [x: string]: string | number;
      };
      /** Easing mode */
      easing?: string;
      /** Custom className */
      className?: string;
    };
    /** Rest of the props, passed to children */
    [x: string]: any;
  }
  const _default: ({
    hideModal,
    name,
    theme,
    options,
    children,
    ...rest
  }: IDrawerViewProps) => JSX.Element;
  export default _default;
}
declare module 'components/common/Grid/Column' {
  /**
   * @module components/common/Grid
   */
  /// <reference types="react" />
  /** List of props that GridColumn accepts */
  export interface IGridColumnProps {
    /** Custom className for column */
    className?: string;
    /** Column inline style */
    style?: React.CSSProperties;
    /** Contents of the column */
    children?: React.ReactChild;
    gutter?: string | number;
    size?: string;
    order?: number | false;
    component?: React.ComponentType<any> | string;
  }
  export const Column: ({
    className,
    style,
    children,
    gutter,
    order: _order,
    size: _size,
    component: Component,
  }: IGridColumnProps) => JSX.Element;
  export const Placeholder: ({ size }: { size: any }) => JSX.Element;
}
declare module 'components/common/Grid' {
  /**
   * @module components/common/Grid
   */
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  import { Breakpoints, Immutable } from '@findify/store-configuration';
  export interface IGridProps extends ThemedSFCProps {
    columns: Immutable.Factory<Breakpoints> | Breakpoints | string;
    className?: string;
    style?: React.CSSProperties;
    /** eq: 12 = 12px | 1em = 1em */
    gutter?: number | string;
    columnClass?: string;
    columnStyle?: React.CSSProperties;
    wrapperComponent?: React.ComponentType<any> | string;
    columnComponent?: React.ComponentType<any> | string;
  }
  export const Column: ({
    className,
    style,
    children,
    gutter,
    order: _order,
    size: _size,
    component: Component,
  }: import('./Column').IGridColumnProps) => JSX.Element;
  const _default: import('react').MemoExoticComponent<
    ({
      children: _children,
      theme,
      columns: _columns,
      gutter: _gutter,
      className,
      style,
      wrapperComponent: WrapperComponent,
      columnComponent,
      ...rest
    }: IGridProps) => JSX.Element
  >;
  export default _default;
}
declare module 'components/common/Image' {
  /**
   * @module components/common/Image
   */
  /// <reference types="react" />
  const _default: ({
    aspectRatio,
    lazy,
    getSrc,
    getThumbnail,
    src,
    alt,
    thumbnail,
  }: {
    aspectRatio: any;
    lazy: any;
    getSrc: any;
    getThumbnail: any;
    src: any;
    alt: any;
    thumbnail: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/common/Image/test' {
  export {};
}
declare module 'components/common/MapArray' {
  /// <reference types="react" />
  import { Immutable } from '@findify/store-configuration';
  /** MapCallback is a type signature for array.map(), immutable.List().map() callback */
  export type MapCallback = (
    item: any,
    index: number,
    arrayLike: ArrayLike
  ) => any;
  /** KeyAccessor is a function of item and index, returning a React key for rendering */
  export type KeyAccessor = (item: any, index: number) => string;
  /** ArrayLike can possibly an array or an instance of immutable.List() */
  export type ArrayLike = {
    map: (callback: MapCallback) => any;
    length?: number;
    size?: number;
    slice: (from: number, to?: number) => ArrayLike;
  };
  /** ReactFactory is a type for React Factory producing components */
  export type ReactFactory = (props: object) => React.Component;
  /** List of props which MapArray component accepts */
  export type MapArrayProps = {
    /** Array-like object which is mapped over */
    array: ArrayLike | Immutable.Factory<any>;
    /** Function used to extract React rendering key */
    keyAccessor?: KeyAccessor;
    /** React component factory */
    factory: React.FC<any>;
    /** Maximum possible limit for iteration */
    limit?: number | false;
    mapProps?: (
      items: any,
      index: number
    ) => void | {
      [key: string]: any;
    };
    /** Rest of the props, passed down to children */
    [key: string]: any;
  };
  const _default: ({
    array,
    keyAccessor,
    mapProps,
    container,
    factory,
    limit,
    ...rest
  }: MapArrayProps) => any;
  export default _default;
}
declare module 'components/common/MapArray/test' {
  export {};
}
declare module 'components/common/Sticky' {
  /**
   * @module components/common/Sticky
   */
  import { Component } from 'react';
  /** Props that Sticky component accepts */
  export interface IStickyProps {
    /** Offset for sticky */
    offset?: number;
    /** Minimal height */
    minHeight?: number;
    stickToTop?: boolean;
  }
  const _default: ({
    theme,
    ...props
  }: {
    [x: string]: any;
    theme?: {} | undefined;
  }) => import('react').CElement<
    {
      theme: any;
    },
    Component<
      {
        theme: any;
      },
      any,
      any
    >
  >;
  export default _default;
}
declare module 'components/common/Sticky/view' {
  /**
   * @module components/common/Sticky
   */
  /// <reference types="react" />
  const _default: ({
    theme,
    registerRoot,
    registerContainer,
    registerSizer,
    children,
    state,
    title,
  }: {
    theme: any;
    registerRoot: any;
    registerContainer: any;
    registerSizer: any;
    children: any;
    state: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/common/Truncate' {
  /**
   * @module components/common/Truncate
   */
  /// <reference types="react" />
  const _default: ({ children }: { children: any }) => JSX.Element;
  export default _default;
}
declare module 'components/common/VirtualizedList' {
  const _default: any;
  export default _default;
}
declare module 'components/common/VirtualizedList/view' {
  /// <reference types="react" />
  const _default: ({
    array,
    factory,
    ...rest
  }: {
    [x: string]: any;
    array: any;
    factory: any;
  }) => import('react').FunctionComponentElement<any>;
  export default _default;
}
declare module 'components/Dropdown' {
  const _default: any;
  export default _default;
}
declare module 'components/Dropdown/view' {
  /**
   * @module components/Dropdown
   */
  /// <reference types="react" />
  import { MJSValue, ThemedSFCProps, ClassnamedProps } from 'types';
  import { List, Map } from 'immutable';
  /** Props that Dropdown Item accepts */
  export interface IDropdownItemProps extends ThemedSFCProps {
    /** Item can be basically any immutable.Map(), that has 'label' attribute */
    item: Map<string, MJSValue>;
    /** Index is item's current index in array of elements */
    index: number;
    /** Current highlighted index */
    highlighted: number;
    /** getItemProps is a method passed down to receive additional props for item from Downshift */
    getItemProps: (item: {
      item: Map<string, MJSValue>;
    }) => {
      [x: string]: any;
    };
    parentId: string;
  }
  /** Props that Dropdown accepts */
  export interface IDropdownProps extends ClassnamedProps, ThemedSFCProps {
    /** onChange function for Downshift */
    onChange: (x: any) => any;
    /** List of items */
    items: List<Map<string, MJSValue>>;
    /** Currently active item */
    selectedItem: Map<string, MJSValue>;
    itemToString?: any;
  }
  const _default: ({
    onChange,
    selectedItem,
    className,
    items: _items,
    theme,
    itemToString,
  }: IDropdownProps) => JSX.Element;
  export default _default;
}
declare module 'components/Facet/Component' {
  /// <reference types="react" />
  import { FilterType } from 'types';
  /**
   * Function, that takes one of filter types and returns facet component for it
   * @param type Filter type to fetch facet component for
   */
  export const getComponent: (
    type: FilterType
  ) =>
    | (({
        theme,
        config,
        isMobile,
        facet,
        hidden,
      }: import('../CheckboxFacet').ICheckboxFacetProps) => JSX.Element)
    | (({
        theme,
        config: facetConfig,
        facet,
        hidden,
        isMobile,
      }: import('../RangeFacet').IRangeFacetProps) => JSX.Element)
    | (({
        theme,
        facet,
        config,
        hidden,
      }: import('../RatingFacet').IRatingFacetProps) => JSX.Element)
    | (({
        config,
        facet,
        hidden,
        theme,
        isMobile,
      }: import('../ColorFacet').IColorFacetProps) => JSX.Element)
    | (({
        theme,
        config,
        facet,
        hidden,
        isMobile,
      }: import('../CategoryFacet').ICategoryFacetProps) => JSX.Element);
  const _default: import('react').MemoExoticComponent<
    (props: any) => import('react').FunctionComponentElement<any>
  >;
  export default _default;
}
declare module 'components/Facet' {
  /// <reference types="react" />
  import { ThemedSFCProps, IFacet } from 'types';
  import { Immutable, Types } from '@findify/store-configuration';
  /** Props that Facet view accepts */
  export interface IFacetProps extends ThemedSFCProps {
    /** Facet component to render */
    FacetComponent: React.Component<any>;
    /** List of openFacets */
    openFacets: string[];
    /** Flag to show if facet is opened on mobile */
    isMobile?: boolean;
    /** Flag to show if facets orientation is mobile */
    isHorizontal?: boolean;
    /** Title of facet */
    title: string;
    /** Facet object */
    item: IFacet;
    /** MJS Configuration */
    config: Immutable.Factory<{
      label: string;
      initiallyCollapsed: boolean;
      type: Types.FilterType;
    }>;
    /** Filters selected in facet */
    filtersSelected: number;
    /** Function to toggle open / closed state of facet */
    onToggle: (name: string) => void;
    /** Amount of items to be shown in "collapsed" mode */
    collapsedItemsCount?: number;
  }
  const _default: ({
    theme,
    item,
    config,
    isMobile,
    isHorizontal,
    onToggle,
    openFacets,
  }: IFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Back' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Down' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Left-Big' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Left' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Right-Big' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Right' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Arrow/Up' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Checkbox/Empty-Mobile' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Checkbox/Empty' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Checkbox/Filled-Mobile' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Checkbox/Filled' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Checkmark/Dark' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/ExternalLink' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Filters' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Fire' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Minus' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Plus' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Radio/Empty' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Radio/Filled' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Search' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Sorting' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/Star' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/X/Dark' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon/icons/X/Mobile' {
  /// <reference types="react" />
  const _default: ({
    title,
    ...rest
  }: {
    [x: string]: any;
    title: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Icon' {
  /**
   * @module components/Icon
   */
  /// <reference types="react" />
  /** Possible icon types */
  export const icons: {
    Filters: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    Fire: ({ title, ...rest }: { [x: string]: any; title: any }) => JSX.Element;
    Minus: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    Plus: ({ title, ...rest }: { [x: string]: any; title: any }) => JSX.Element;
    Search: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    Sorting: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    CheckmarkDark: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    Star: ({ title, ...rest }: { [x: string]: any; title: any }) => JSX.Element;
    XDark: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    XMobile: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    RadioEmpty: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    RadioFilled: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowBack: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowDown: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowUp: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowLeft: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowRight: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowLeftBig: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ArrowRightBig: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    CheckboxFilled: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    CheckboxEmpty: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
    ExternalLink: ({
      title,
      ...rest
    }: {
      [x: string]: any;
      title: any;
    }) => JSX.Element;
  };
  /** Props that Icon accepts */
  export type IIconProps = {
    /** Icon name */
    name: keyof typeof icons;
    /** Icon width in pixels */
    width?: number;
    /** Icon height in pixels */
    height?: number;
    /** Custom className */
    className?: string;
    /** Accessible title for screen readers */
    title?: string;
    /** Accessible title for screen readers */
    component?: React.Component;
    /** Rest of props to pass to underlying elements */
    [x: string]: any;
  };
  const Icon: ({
    name,
    component,
    className,
    ...rest
  }: IIconProps) => import('react').DetailedReactHTMLElement<
    import('react').InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  export default Icon;
}
declare module 'components/Pagination' {
  /// <reference types="react" />
  const _default: import('react').NamedExoticComponent<{
    theme?: any;
  }>;
  export default _default;
}
declare module 'components/RangeFacet/content' {
  /**
   * @module components/RangeFacet
   */
  const _default: ({ item, config }: { item: any; config: any }) => any;
  export default _default;
}
declare module 'components/RangeFacet' {
  /**
   * @module components/RangeFacet
   */
  /// <reference types="react" />
  import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
  export interface IRangeFacetProps extends ThemedSFCProps {
    /** Facet to extract values from */
    facet: IFacet;
    /** Facet config */
    config: MJSConfiguration;
    hidden: boolean;
    isMobile?: boolean;
  }
  const _default: ({
    theme,
    config: facetConfig,
    facet,
    hidden,
    isMobile,
  }: IRangeFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/RatingFacet/content' {
  /// <reference types="react" />
  const _default: ({
    item,
    theme,
    config,
  }: {
    item: any;
    theme: any;
    config: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/RatingFacet' {
  /**
   * @module components/RatingFacet
   */
  /// <reference types="react" />
  import { IFacet, IFacetValue, MJSConfiguration, ThemedSFCProps } from 'types';
  import { List } from 'immutable';
  /** Props that RatingFacet view accepts */
  export interface IRatingFacetProps extends ThemedSFCProps {
    /** Facet to extract values from */
    facet: IFacet;
    /** Facet values */
    items: List<IFacetValue>;
    /** MJS Configuration */
    config: MJSConfiguration;
    hidden: boolean;
  }
  const _default: ({
    theme,
    facet,
    config,
    hidden,
  }: IRatingFacetProps) => JSX.Element;
  export default _default;
}
declare module 'components/RatingFacet/Item' {
  /// <reference types="react" />
  import { IFacetValue, ThemedSFCProps, MJSConfiguration } from 'types';
  /** Props that RatingFacet Item view accepts */
  export interface IRatingFacetItemProps extends ThemedSFCProps {
    /** Facet item to render */
    item: IFacetValue;
    /** Custom inline style */
    style: React.CSSProperties;
    /** MJS Configuration */
    config: MJSConfiguration;
  }
  const _default: ({
    item,
    theme,
    style,
    config,
  }: IRatingFacetItemProps) => JSX.Element;
  export default _default;
}
declare module 'components/search/DesktopActions' {
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  /** Props that DesktopActions view accepts */
  export interface IDesktopActionsProps extends ThemedSFCProps {
    isCollection: boolean;
  }
  const _default: ({
    theme,
    isCollection,
  }: IDesktopActionsProps) => JSX.Element;
  export default _default;
}
declare module 'components/search/DesktopFacets' {
  /// <reference types="react" />
  const _default: import('react').NamedExoticComponent<object>;
  export default _default;
}
declare module 'components/search/DesktopFacets/Title' {
  /**
   * @module components/search/DesktopFacets
   */
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  import { Map } from 'immutable';
  /** Props that hidable facet titles accept */
  export interface IHidableProps extends ITitlesProps {
    /** Method to hide facets */
    onHide: () => any;
  }
  /** Props that facet titles accept */
  export interface ITitlesProps extends ThemedSFCProps {
    /** MJS API Response Metadata */
    meta: Map<string, any>;
    /** Method to reset facets */
    onReset: (e: Event) => void;
    hidable: boolean;
  }
  const _default: ({
    theme,
    meta,
    onReset,
    onHide,
    hidable,
  }: IHidableProps) => JSX.Element;
  export default _default;
}
declare module 'components/search/LazyResults' {
  /// <reference types="react" />
  const _default: ({
    theme,
    card,
  }: {
    theme?: Record<string, string> | undefined;
    card?:
      | (({
          item,
          theme,
          className,
          config,
          Container,
        }: import('../../Cards/Product').IProductCardProps) => JSX.Element)
      | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/search/MobileActions' {
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  /** Props that MobileActionsView accepts */
  export interface IMobileActionsProps extends ThemedSFCProps {
    /** Flag, showing whether smart collection or regular searches are opened */
    isCollection?: boolean;
    showModal: (name: string) => void;
    hideModal: (name: string) => void;
  }
  const _default: import('react').ComponentClass<unknown, any>;
  export default _default;
}
declare module 'components/search/MobileFacets' {
  /**
   * @module components/search/MobileFacets
   */
  /// <reference types="react" />
  import { ThemedSFCProps, IFacet, MJSConfiguration, MJSValue } from 'types';
  import { List } from 'immutable';
  import { Facet } from '@findify/react-connect/types/immutable/facets';
  /** Props that FacetContent accepts */
  export interface IFacetContentProps extends ThemedSFCProps {
    /** Currently active facet */
    active: Facet;
    /** MJS Configuration */
    config: MJSConfiguration;
  }
  /** Props that MobileFacets view accepts */
  export interface IMobileFacetsProps extends ThemedSFCProps {
    /** immutable.List() of Facets */
    facets: List<IFacet>;
    /** Currently active facet */
    activeFacet?: IFacet;
    /** Method used to select a facet */
    selectFacet: (name?: string) => any;
    /** Method used to reset facet */
    onReset: () => any;
    /** MJS Configuration */
    config: MJSConfiguration;
    /** MJS API Request Metadata */
    meta: Map<string, MJSValue>;
    /** Method used for hiding modal / drawer */
    hideModal: (name: string) => any;
    /** Total filters selected */
    total: number;
    /** Filters selected for active facet */
    filtersSelected: number;
  }
  const _default: import('react').MemoExoticComponent<
    ({ theme, hideModal }: IMobileFacetsProps) => JSX.Element
  >;
  export default _default;
}
declare module 'components/search/MobileFacets/Titles' {
  /**
   * @module components/search/MobileFacets
   */
  /// <reference types="react" />
  import { ThemedSFCProps, IFacet, MJSConfiguration } from 'types';
  import { List } from 'immutable';
  /** Props that MobileFacets FacetLabel accepts */
  export interface IMobileFacetsLabelProps extends ThemedSFCProps {
    /** Facet */
    item: IFacet;
    /** Count of filters enabled */
    filterCount?: number;
    /** MJS Configuration */
    config: MJSConfiguration;
    /** Click handler to open facet customization menu */
    onClick: (evt?: React.MouseEvent<any>) => any;
  }
  /** Props that MobileFacets TitlesView accepts */
  export interface IMobileFacetsTitlesProps extends ThemedSFCProps {
    /** immutable.List of facets */
    facets: List<IFacet>;
    /** Method to select facet by its name */
    selectFacet: (name: string) => any;
    /** MJS Configuration */
    config: MJSConfiguration;
  }
  const MobileFacetsTitlesView: ({
    theme,
    facets,
    selectFacet,
    config,
  }: IMobileFacetsTitlesProps) => JSX.Element;
  export default MobileFacetsTitlesView;
}
declare module 'components/search/MobileSorting' {
  /// <reference types="react" />
  import { ThemedSFCProps, ISortingItem, MJSConfiguration } from 'types';
  /** Props that MobileSorting Item accepts */
  export interface IMobileSortingItemProps extends ThemedSFCProps {
    /** Sorting item object to display */
    item: ISortingItem;
    /** Sorting item index in array */
    selected: ISortingItem;
    /** Click handler */
    onChange: (item?: ISortingItem) => void;
  }
  /** Props that MobileSorting view accepts */
  export interface IMobileSortingProps extends ThemedSFCProps {
    /** Custom inline styles */
    style: React.CSSProperties;
    /** Method to hide modal from Drawer */
    hideModal: (e: MouseEvent) => any;
    /** MJS Configuration */
    config: MJSConfiguration;
  }
  const _default: ({
    theme,
    style,
    hideModal,
  }: IMobileSortingProps) => JSX.Element;
  export default _default;
}
declare module 'components/search/Query' {
  /**
   * @module components/search/Query
   */
  /// <reference types="react" />
  const _default: import('react').MemoExoticComponent<
    ({ theme }: { theme?: Record<string, string> | undefined }) => JSX.Element
  >;
  export default _default;
}
declare module 'components/search/StaticResults' {
  /**
   * @module components/search/StaticResults
   */
  /// <reference types="react" />
  const _default: ({
    theme,
  }: {
    theme?: Record<string, string> | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'components/Sorting' {
  /// <reference types="react" />
  const _default: import('react').MemoExoticComponent<
    ({
      theme,
    }: import('../../types').IThemedSFCProps<
      import('../../types').Theme
    >) => JSX.Element
  >;
  export default _default;
}
declare module 'components/Tabs' {
  /**
   * @module components/Tabs
   */
  /// <reference types="react" />
  export const Tabs: import('react').ComponentClass<unknown, any>;
  export const Tab: () => null;
}
declare module 'components/Tabs/test' {
  export {};
}
declare module 'components/Tabs/view' {
  /**
   * @module components/Tabs
   */
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  export interface ITabsProps extends ThemedSFCProps {
    /** Currently selected tab. Keep it empty if you want to use Tabs in self-controlled mode */
    selectedIndex?: number;
    /** Flag to render Tabs in mobile mode */
    isMobile?: boolean;
    /** Tab click event handler */
    onTabClick: (evt: Event) => any;
    /** Current tab body */
    body: React.ReactChildren;
  }
  const TabsView: ({
    theme,
    children,
    onTabClick,
    body,
    selectedIndex,
    isMobile,
  }: ITabsProps) => JSX.Element;
  export default TabsView;
}
declare module 'components/Text' {
  /**
   * @module components/Text
   */
  /// <reference types="react" />
  import { ThemedSFCProps, ClassnamedProps } from 'types';
  /** Props that Text component accepts */
  export interface ITextProps extends ThemedSFCProps, ClassnamedProps {
    /** Either an html tag name or a React.Component */
    component?: string | React.ElementType;
    /** One of modes specified in styles.css */
    mode?: string;
    /** Flag to show text as bold */
    bold?: boolean;
    secondary?: boolean;
    primary?: boolean;
    uppercase?: boolean;
    lowercase?: boolean;
    /** Custom inline styles */
    style?: {
      [x: string]: string;
    };
    /** Flag to show text as inline block */
    inlineBlock?: boolean;
    /** One of sizes specified in styles.css */
    size?: string;
    /** Custom HTML */
    html?: string;
  }
  const _default: import('react').NamedExoticComponent<ITextProps>;
  export default _default;
}
declare module 'helpers/chunks' {
  const _default: {
    /** Views */
    views: {
      search: () => Promise<typeof import('../layouts/Search')>;
      autocomplete: () => Promise<typeof import('../layouts/Autocomplete')>;
      recommendation: () => Promise<typeof import('../layouts/Recommendation')>;
      zeroResults: () => Promise<typeof import('../layouts/ZeroResults')>;
      custom: () => Promise<typeof import('../layouts/Custom')>;
      content: () => Promise<typeof import('../layouts/Content')>;
      tabs: () => Promise<typeof import('../layouts/Tabs')>;
    };
    /** Recommendation */
    recommendation: {
      grid: () => Promise<typeof import('../layouts/Recommendation/Grid/view')>;
      slider: () => Promise<
        typeof import('../layouts/Recommendation/Slider/view')
      >;
    };
    /** Autocomplete */
    autocomplete: {
      sidebar: () => Promise<typeof import('../layouts/Autocomplete/Sidebar')>;
      dropdown: () => Promise<
        typeof import('../layouts/Autocomplete/Dropdown')
      >;
      FullscreenWithInput: () => Promise<
        typeof import('../layouts/Autocomplete/FullscreenWithInput')
      >;
    };
    components: {
      virtualizedList: () => Promise<
        typeof import('../components/common/VirtualizedList/view')
      >;
      drawer: () => Promise<typeof import('../components/common/Drawer')>;
      dropdown: () => Promise<typeof import('../components/Dropdown/view')>;
    };
  };
  export default _default;
}
declare module 'helpers/createPortal' {
  import { Component } from 'react';
  export class Portal extends Component<any> {
    element: any;
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
  }
  export const portal: (
    children: any,
    extraProps?: {}
  ) => import('react').CElement<any, Portal>;
}
declare module 'helpers/debounce' {
  export const debounce: (fn: any, wait?: any) => () => void;
}
declare module 'helpers/deprecated' {
  /// <reference types="react" />
  const _default: (
    name: any
  ) => (
    base: any
  ) => (
    props: any
  ) => import('react').CElement<any, import('react').Component<any, any, any>>;
  export default _default;
}
declare module 'helpers/emmiter' {
  export const emit: (...args: any[]) => any;
  export const listen: (...args: any[]) => any;
  export const useEvents: (events?: any) => void;
}
declare module 'helpers/escapeRegExp' {
  export const escapeRegExp: (s: any) => any;
}
declare module 'helpers/formatCurrency' {
  export interface ICurrencyData {
    symbol?: string;
    thousand?: string;
    decimal?: string;
    precision?: number;
    symbolOnLeft?: boolean;
    spaceBetweenAmountAndSymbol?: boolean;
    format?: {
      pos: string;
      neg: string;
      zero: string;
    };
  }
  const _default: (currency?: ICurrencyData) => (value: string) => any;
  export default _default;
}
declare module 'helpers/getBreakpoint' {
  const _default: (breakpoints: any, width?: number) => any;
  export default _default;
}
declare module 'helpers/getPrice' {
  export const priceIsSampleArray: (price: any) => boolean;
  export const getPrice: (maybeImmutablePrice: any, currency: any) => any;
}
declare module 'helpers/omit' {
  const _default: (keys: any) => (obj: any) => any;
  export default _default;
}
declare module 'helpers/pure' {
  import { ComponentEnhancer } from 'recompose';
  const _default: ComponentEnhancer<unknown, unknown>;
  export default _default;
}
declare module 'helpers/template' {
  const _default: (
    template?: string,
    selector?: RegExp
  ) => (...args: any[]) => any;
  export default _default;
}
declare module 'helpers/trackProductPosition' {
  /// <reference types="react" />
  const _default: (item: any) => import('react').MutableRefObject<null>;
  export default _default;
}
declare module 'helpers/useColumns' {
  import { Breakpoints, Immutable } from '@findify/store-configuration';
  const _default: (
    _media: Breakpoints | Immutable.Factory<Breakpoints>,
    defaultValue?: number
  ) => string;
  export default _default;
}
declare module 'helpers/useLazy' {
  /// <reference types="react" />
  const _default: (
    offset?: number
  ) => {
    container: import('react').MutableRefObject<null>;
    onLoadNext: () => import('@findify/agent/types/core/Agent').Agent;
    onLoadPrev: () => import('@findify/agent/types/core/Agent').Agent;
    items: any;
    displayPrevButton: any;
    displayNextButton: any;
  };
  export default _default;
}
declare module 'helpers/useMedia' {
  const _default: (..._breakpoints: number[]) => boolean[];
  export default _default;
}
declare module 'helpers/useScrollOnChange' {
  const _default: (items: any) => void;
  /**
   * Hack to emit scroll event
   */
  export default _default;
}
declare module 'helpers/useSortingLogic' {
  const _default: () => any[];
  export default _default;
}
declare module 'helpers/useTheme' {
  const _default: (
    theme?: {},
    styles?: {}
  ) => {
    [className: string]: string;
  };
  /**
   * Merges theme objects
   * @property theme - new object
   * @property baseStyles - theme
   */
  export default _default;
}
declare module 'helpers/useTranslations' {
  const _default: () => (
    key:
      | 'suggestions.accessibleTitle'
      | 'product.availableInVariants'
      | 'facets.less'
      | 'facets.more'
      | 'facets.allCategories'
      | 'facets.expanded'
      | 'facets.collapsed'
      | 'facets.submit'
      | 'facets.filters'
      | 'facets.clearAll'
      | 'facets.hide'
      | 'facets.back'
      | 'facets.done'
      | 'facets.seeResults'
      | 'pagination.previous'
      | 'pagination.goTo'
      | 'pagination.next'
      | 'actions.showFilters'
      | 'actions.sorting'
      | 'actions.back'
      | 'actions.seeResults'
      | 'actions.sortBy'
      | 'search.title'
      | 'search.loadPrev'
      | 'search.loadMore'
      | 'search.noQuery'
      | 'search.showingEmpty'
      | 'search.showing'
      | 'search.zeroResultsFor'
      | 'search.partialMatch'
      | 'search.accessibleUpdate'
      | 'zeroresults.sorryNoResults'
      | 'zeroresults.noResultsFound'
      | 'zeroresults.noResultEmptyQuery'
      | 'zeroresults.tryOneOfThese'
      | 'zeroresults.checkOutPopularProducts'
      | 'autocomplete.trendingSearches'
      | 'autocomplete.suggestionsTitle'
      | 'autocomplete.trendingProducts'
      | 'autocomplete.productMatches'
      | 'autocomplete.tipResults'
      | 'autocomplete.viewAll'
      | 'autocomplete.placeholder',
    ...args: any[]
  ) => string;
  export default _default;
}
declare module 'helpers/withDrawer' {
  export const withDrawer: (
    modalName: any,
    modalComponent: any,
    { renderTo, ...options }?: any
  ) => (BaseComponent: any) => any;
}
declare module 'helpers/withErrorHandler' {
  import { Component } from 'react';
  const _default: (
    BaseComponent: any
  ) => {
    new (props: {} | Readonly<{}>): {
      state: {
        error: boolean;
      };
      componentDidCatch(error: any, info: any): void;
      render():
        | import('react').CElement<unknown, Component<unknown, any, any>>
        | null;
      context: any;
      setState<K extends never>(
        state:
          | {}
          | ((
              prevState: Readonly<{}>,
              props: Readonly<{}>
            ) => {} | Pick<{}, K> | null)
          | Pick<{}, K>
          | null,
        callback?: (() => void) | undefined
      ): void;
      forceUpdate(callback?: (() => void) | undefined): void;
      readonly props: Readonly<{}> &
        Readonly<{
          children?: import('react').ReactNode;
        }>;
      refs: {
        [key: string]: import('react').ReactInstance;
      };
      componentDidMount?(): void;
      shouldComponentUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): boolean;
      componentWillUnmount?(): void;
      getSnapshotBeforeUpdate?(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>
      ): any;
      componentDidUpdate?(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>,
        snapshot?: any
      ): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<{}>,
        nextContext: any
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<{}>,
        nextContext: any
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): void;
    };
    new (props: {}, context: any): {
      state: {
        error: boolean;
      };
      componentDidCatch(error: any, info: any): void;
      render():
        | import('react').CElement<unknown, Component<unknown, any, any>>
        | null;
      context: any;
      setState<K extends never>(
        state:
          | {}
          | ((
              prevState: Readonly<{}>,
              props: Readonly<{}>
            ) => {} | Pick<{}, K> | null)
          | Pick<{}, K>
          | null,
        callback?: (() => void) | undefined
      ): void;
      forceUpdate(callback?: (() => void) | undefined): void;
      readonly props: Readonly<{}> &
        Readonly<{
          children?: import('react').ReactNode;
        }>;
      refs: {
        [key: string]: import('react').ReactInstance;
      };
      componentDidMount?(): void;
      shouldComponentUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): boolean;
      componentWillUnmount?(): void;
      getSnapshotBeforeUpdate?(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>
      ): any;
      componentDidUpdate?(
        prevProps: Readonly<{}>,
        prevState: Readonly<{}>,
        snapshot?: any
      ): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<{}>,
        nextContext: any
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<{}>,
        nextContext: any
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<{}>,
        nextState: Readonly<{}>,
        nextContext: any
      ): void;
    };
    displayName: string;
    contextType?: import('react').Context<any> | undefined;
  };
  export default _default;
}
declare module 'helpers/withEvents' {
  /// <reference types="react" />
  const _default: (
    events?: any
  ) => (
    BaseComponent: any
  ) => (
    props: any
  ) => import('react').CElement<any, import('react').Component<any, any, any>>;
  export default _default;
}
declare module 'helpers/withLazy' {
  /// <reference types="react" />
  const _default: () => (
    BaseComponent: any
  ) => {
    new (props: any): {
      container: any;
      autoLoadCount: number;
      registerContainer: (ref: any) => void;
      onLoadNext: () => any;
      onLoadPrev: () => any;
      readonly lessAllowed: any;
      readonly moreAllowed: any;
      trackPosition: () => number | false;
      componentDidMount(): void;
      componentWillUnmount(): void;
      UNSAFE_componentWillReceiveProps({
        items,
        meta,
        config,
      }: {
        items: any;
        meta: any;
        config: any;
      }): void;
      shouldComponentUpdate(props: any, state: any): boolean;
      render(): JSX.Element;
      context: any;
      setState<K extends string | number | symbol>(
        state: any,
        callback?: (() => void) | undefined
      ): void;
      forceUpdate(callback?: (() => void) | undefined): void;
      readonly props: Readonly<any> &
        Readonly<{
          children?: import('react').ReactNode;
        }>;
      state: Readonly<any>;
      refs: {
        [key: string]: import('react').ReactInstance;
      };
      componentDidCatch?(
        error: Error,
        errorInfo: import('react').ErrorInfo
      ): void;
      getSnapshotBeforeUpdate?(
        prevProps: Readonly<any>,
        prevState: Readonly<any>
      ): any;
      componentDidUpdate?(
        prevProps: Readonly<any>,
        prevState: Readonly<any>,
        snapshot?: any
      ): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<any>,
        nextContext: any
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<any>,
        nextState: Readonly<any>,
        nextContext: any
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<any>,
        nextState: Readonly<any>,
        nextContext: any
      ): void;
    };
    contextType?: import('react').Context<any> | undefined;
  };
  /**
   * withLazy() returns a HOC for wrapping around component you want to include lazy loading to
   * @returns HOC, accepting a view you want to add lazy loading to
   */
  export default _default;
}
declare module 'helpers/withMinResultsToShow' {
  const _default: () => (BaseComponent: any) => (props: any) => any;
  /**
   * withMinResultsToShow allows you to only show component,
   * when it either has no minResultsToShow on its configuration, or when it has minResultsToShow and
   * number of items provided to component is either equal or exceeds minResultsToShow configuration value
   * @param BaseComponent view you will be adding minResultsToShow functionality to
   * @returns MinResultsToShow-enhanced HOC
   */
  export default _default;
}
declare module 'helpers/withMobile' {
  /// <reference types="react" />
  export const useMobile: () => boolean;
  const _default: (
    BaseComponent: any
  ) => (
    props: any
  ) => import('react').CElement<any, import('react').Component<any, any, any>>;
  export default _default;
}
declare module 'helpers/withScrollOnItemsChange' {
  /// <reference types="recompose" />
  const _default: import('recompose').ComponentEnhancer<unknown, unknown>;
  export default _default;
}
declare module 'helpers/withTheme' {
  /// <reference types="react" />
  const _default: (
    defaultTheme: any
  ) => (
    Component: any
  ) => ({
    theme,
    ...props
  }: {
    [x: string]: any;
    theme?: {} | undefined;
  }) => import('react').CElement<
    {
      theme: any;
    },
    import('react').Component<
      {
        theme: any;
      },
      any,
      any
    >
  >;
  export default _default;
}
declare module 'helpers/withTheme.test' {
  export {};
}
declare module 'layouts/Autocomplete/Dropdown' {
  /**
   * @module layouts/Autocomplete/Dropdown
   */
  /// <reference types="react" />
  import { ThemedSFCProps, ISuggestion, MJSValue } from 'types';
  import { List } from 'immutable';
  import { Immutable } from '@findify/store-configuration';
  export interface IAutocompletePanel extends ThemedSFCProps {
    config: Immutable.AutocompleteConfig;
    isTrendingSearches?: boolean;
    [x: string]: any;
  }
  /** Layout column mapping */
  export const Suggestions: ({
    config,
    theme,
    isTrendingSearches,
    ...rest
  }: IAutocompletePanel) => JSX.Element;
  export const Products: ({
    config,
    theme,
    isTrendingSearches,
    ...rest
  }: IAutocompletePanel) => JSX.Element;
  /** Props that SearchOrZero component accepts */
  export interface ISearchOrZeroProps {
    /** List of search suggestions */
    suggestions: List<ISuggestion>;
    /** MJS Configuration */
    config: Immutable.AutocompleteConfig;
    /** MJS API Request Meta */
    meta: Map<string, MJSValue>;
    /** Selected suggestion index. -1 means no suggestion is selected on keyboard */
    selectedSuggestion: number;
    /** Flag that shows if autocomplete is running in TrendingSearches mode */
    isTrendingSearches: boolean;
    /** Rest of the props passed down to panels */
    [x: string]: any;
  }
  export interface IAutocompleteDropdownProps {
    /** List of search suggestions */
    suggestions: List<ISuggestion>;
    /** MJS Configuration */
    config: Immutable.AutocompleteConfig;
    /** MJS API Request Meta */
    meta: Map<string, MJSValue>;
    /** Selected suggestion index. -1 means no suggestion is selected on keyboard */
    selectedSuggestion: number;
    /** Flag that shows if autocomplete is running in TrendingSearches mode */
    isTrendingSearches: boolean;
    /** Flag that tells if mobileBreakpoint has been triggered */
    isMobile: boolean;
    /** Rest of the props passed down to panels */
    [x: string]: any;
  }
  const _default: ({
    theme,
    config,
    isFullScreen,
    ...rest
  }: IAutocompleteDropdownProps) => JSX.Element;
  export default _default;
}
declare module 'layouts/Autocomplete/Dropdown/trackPosition' {
  import { MutableRefObject } from 'react';
  export const usePosition: (
    config: any
  ) => ['left' | 'right', MutableRefObject<any> | undefined];
  const _default: (BaseComponent: any) => (props: any) => any;
  export default _default;
}
declare module 'layouts/Autocomplete/FullscreenWithInput' {
  /**
   * @module layouts/Autocomplete/Fullscreen
   */
  /// <reference types="react" />
  import { Immutable } from '@findify/store-configuration';
  export interface IAutocompleteDropdownProps {
    /** MJS Configuration */
    config: Immutable.AutocompleteConfig;
    /** Selected suggestion index. -1 means no suggestion is selected on keyboard */
    selectedSuggestion: number;
    /** Flag that shows if autocomplete is running in TrendingSearches mode */
    isTrendingSearches: boolean;
    /** Flag that tells if mobileBreakpoint has been triggered */
    isMobile: boolean;
    /** Rest of the props passed down to panels */
    [x: string]: any;
  }
  const _default: ({
    theme,
    config,
    ...rest
  }: IAutocompleteDropdownProps) => JSX.Element;
  export default _default;
}
declare module 'layouts/Autocomplete' {
  /**
   * @module layouts/Autocomplete
   */
  const _default: any;
  export default _default;
}
declare module 'layouts/Autocomplete/Sidebar' {
  /// <reference types="react" />
  const _default: ({
    theme,
    config,
  }: {
    theme?: Record<string, string> | undefined;
    config: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'layouts/Autocomplete/types' {
  /** View type to View component mapping */
  export const LayoutTypes: {
    sidebar: () => Promise<typeof import('./Sidebar')>;
    dropdown: () => Promise<typeof import('./Dropdown')>;
    'fullscreen-with-input': () => Promise<
      typeof import('./FullscreenWithInput')
    >;
  };
  /** Possible Autocomplete view types */
  export type AutocompleteType = keyof typeof LayoutTypes;
}
declare module 'layouts/Autocomplete/withAutocompleteLogic' {
  /// <reference types="react" />
  export const useAutocompleteLogic: () => {
    selectedSuggestion: any;
    closeAutocomplete: () => any;
  };
  const _default: (
    BaseComponent: any
  ) => (
    props: any
  ) => import('react').CElement<
    unknown,
    import('react').Component<unknown, any, any>
  >;
  export default _default;
}
declare module 'layouts/Content' {
  import { MJSConfiguration, MJSValue, ThemedSFCProps } from 'types';
  /** This is a list of props ContentSearchLayout accepts */
  export interface IContentSearchProps extends ThemedSFCProps {
    /** MJS configuration */
    config: MJSConfiguration;
    /** MJS Request meta-information, like query, offset, limits */
    meta: Map<string, MJSValue>;
    /** Flag that tells ContentSearchView to render in mobile mode */
    isMobile?: boolean;
    /** Flag to pull filters to the right on desktop */
    filtersOnRight?: boolean;
  }
  const _default: any;
  export default _default;
}
declare module 'layouts/Custom' {
  /// <reference types="react" />
  const _default: ({
    theme,
  }: {
    theme?: Record<string, string> | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'layouts/Recommendation/Grid' {
  const _default: any;
  export default _default;
}
declare module 'layouts/Recommendation/Grid/view' {
  /**
   * @module layouts/Recommendation/Grid
   */
  /// <reference types="react" />
  import { IProduct, MJSConfiguration, ThemedSFCProps } from 'types/index';
  import { List } from 'immutable';
  /** This is a list of props Grid layout for Recommendations accepts */
  export interface IGridProps extends ThemedSFCProps {
    /** immutable.List of Products to display */
    items: List<IProduct>;
    /** MJS configuration */
    config: MJSConfiguration;
    columns: string;
  }
  const GridRecommendationLayout: ({
    items,
    config,
    columns,
  }: IGridProps) => JSX.Element | null;
  export default GridRecommendationLayout;
}
declare module 'layouts/Recommendation' {
  /**
   * @module layouts/Recommendation
   */
  const _default: any;
  export default _default;
}
declare module 'layouts/Recommendation/Slider' {
  import 'layouts/Recommendation/Slider/styles.global.css';
  const _default: any;
  export default _default;
}
declare module 'layouts/Recommendation/Slider/Swiper' {
  /// <reference types="react" />
  const _default: ({
    children,
    ...props
  }: {
    [x: string]: any;
    children: any;
  }) => JSX.Element;
  export default _default;
}
declare module 'layouts/Recommendation/Slider/view' {
  /// <reference types="react" />
  const _default: ({
    theme,
  }: {
    theme?: Record<string, string> | undefined;
  }) => JSX.Element;
  export default _default;
}
declare module 'layouts/Search' {
  /**
   * @module layouts/Search
   */
  import { List } from 'immutable';
  import styles from 'layouts/Search/styles.css';
  import { ThemedSFCProps, IProduct } from 'types';
  /** Props that search layout accepts */
  export interface ISearchProps extends ThemedSFCProps<typeof styles> {
    isCollection?: boolean;
    /** Items list */
    items: List<IProduct>;
  }
  const _default: any;
  export default _default;
}
declare module 'layouts/Tabs' {
  const _default: any;
  export default _default;
}
declare module 'layouts/ZeroResults' {
  /**
   * @module layouts/ZeroResults
   */
  /// <reference types="react" />
  import { ThemedSFCProps } from 'types';
  import styles from 'layouts/ZeroResults/styles.css';
  /** Props that ZeroResults layout accepts */
  export interface IZeroResultsProps extends ThemedSFCProps<typeof styles> {
    /** Query for items was not found */
    q: string;
  }
  const _default: ({ q, theme }: IZeroResultsProps) => JSX.Element;
  export default _default;
}
