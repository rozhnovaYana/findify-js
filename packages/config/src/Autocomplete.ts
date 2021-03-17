import { BaseFeature } from './BaseFeature'
import * as enums from './enums'

type TemplateSetting = {
  /**
   * Specific template setting
   */
  [key in enums.AutocompleteTemplate]: {
    /**
     * Autocomplete alignment
     */
    position?: enums.AutocompletePosition,
  
    /**
     * Suggestions options
     */
    suggestions: {
      display: boolean
    }

    /**
     * Product matches options
     */
    productMatches: {
      display: boolean
    }
  };
}

export interface Autocomplete extends BaseFeature<'Autocomplete'>, TemplateSetting {
  /**
   * If value set to `true` and current page is "Search Results", then autocomplete will
   * try to update search widget rather then send request for suggestions
   */
  instant: boolean,

  /**
   * Listen closest form submit event
   */
  handleFormSubmit: boolean,

  /**
   * Shows trending suggestions when query is empty
   */
  enableTrendingSearches: boolean

  /**
   * Node where widget should be rendered in
   * - parent - Parent node
   * - self - Dynamically created widget node
   * - body - Document.Body
  */
  renderIn: enums.AutocompleteRenderNode,


  template: {
		mobile: enums.AutocompleteTemplate
		desktop: enums.AutocompleteTemplate
  }

  /**
   * Display clickable background overlay
   */
  showOverlay: boolean,
}
