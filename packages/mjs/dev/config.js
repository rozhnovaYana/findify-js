export default {
  api: {
    key: '439105be-ae95-4149-9e1f-ea36867d79cd',
  },
  sentryDisabled: false,
  platform: {
    shopify: true,
  },
  mjs_version: 'v3.2.83',
  analyticsjs_version: '1.1.43',
  status: 'live',
  mobileBreakpoint: 767,
  css: [
    '.collection-title {\n  width: 100%;\n}\n\n@media only screen and (min-width: 768px) {\n.collections-findify .findify--results .findify-layouts--results-layout__sort {\n  float: right !important;\n}\n.findify-root .findify--results .findify-layouts--results-layout__sort{\n    margin: 17px 17px 10px auto!important;\n}}\n\n.findify-root .findify-widget--count__dropdown-root{\n    display: table-cell;\n}\n.findify-root .findify-widget--count__dropdown-select{\n    -webkit-appearance: none;\n    appearance: none;\n    padding: 6px;\n    padding-right: 24px;\n}\n.findify-root .findify-widget--count__dropdown-select::-ms-expand {\n    display: none;\n}',
  ],
  location: {
    searchUrl: '/search',
    prefix: 'findify',
  },
  selectors: {
    "input[name='q']": 'autocomplete',
    '#findify_results': 'search',
    '#product-findify-rec-4': 'recommendations',
    '#product-findify-rec-1': 'recommendations',
    '#home-findify-rec-3': 'recommendations',
    '#cart-findify-rec-1': 'recommendations',
    '#product-findify-rec-3': 'recommendations',
    '#product-findify-rec-2': 'recommendations',
    '#category-findify-rec-1': 'recommendations',
  },
  currency: {
    code: 'USD',
  },
  poweredByFindify: false,
  view: {
    pagination: false,
    infinite: true,
  },
  features: {
    autocomplete: {
      isMobileSimple: false,
      position: 'left',
      meta: {
        item_limit: 4,
        suggestion_limit: 10,
      },
      product: {
        title: {
          lines: 3,
        },
        i18n: {
          colorsAvailable: 'Colors available',
        },
      },
      i18n: {
        suggestionsTitle: 'Search suggestions',
        productMatchesTitle: 'Product matches',
        tipTitle: 'Press enter to search',
      },
    },
    search: {
      disableScroll: false,
      scrollOffset: 0,
      meta: {
        limit: '24',
      },
      product: {
        title: {
          lines: 3,
        },
        i18n: {
          colorsAvailable: 'Colors available',
        },
      },
      sorting: {
        options: [
          {
            field: 'default',
            order: '',
          },
          {
            field: 'price',
            order: 'desc',
          },
          {
            field: 'price',
            order: 'asc',
          },
          {
            field: 'created_at',
            order: 'desc',
          },
        ],
        i18n: {
          title: 'Sort by',
          options: {
            default: 'Popularity',
            'price|desc': 'Price: High to low',
            'price|asc': 'Price: Low to high',
            'created_at|desc': "What's new",
          },
        },
      },
      pagination: {
        step: 2,
        i18n: {
          previous: 'Prev',
          next: 'Next',
        },
      },
      loadMore: {
        i18n: {
          loadMore: 'Load more',
          loadPrev: 'Load previous',
        },
      },
      zeroResultsType: 'trending',
      i18n: {
        noResult:
          "Oh no! Your search for <span class=\"findify-query\"></span> did not match any products.<br/>But don't give up, we're here to help you find what you're looking for.",
      },
      breadcrumbs: {
        i18n: {
          showing: 'Showing %s results for',
          noQuery: 'Showing all products. Use filters to refine your search.',
          partialMatch: 'Showing results that partially match instead.',
          zeroResultsFor: '0 results for',
        },
      },
      facets: {
        types: {
          price: 'price',
          'reviews.average_score': 'rating',
          color: 'color',
        },
        labels: {
          'custom_fields.nos': 'Nos',
          'custom_fields.fashion': 'Fashion',
          'custom_fields.fit': 'Fit',
          'custom_fields.gender': 'Gender',
          'custom_fields.impact_level': 'Impact Level',
          'custom_fields.cf_material': 'Material',
          'custom_fields.wiring': 'Wiring',
          'custom_fields.collection': 'Collection',
          material: 'Old material',
          size: 'Size',
          'custom_fields.barcode': 'Barcode',
          'custom_fields.custom_size': 'Size',
          brand: 'Brand',
          color: 'Color',
          price: 'Price',
          'reviews.average_score': 'Avg. customer rating',
          tags: 'All tags',
          'custom_fields.special_sizes': 'Special Sizes',
          'custom_fields.offer': 'offer',
          'custom_fields.custom_sku': 'custom_sku',
          'custom_fields.old_colors': 'Old Colors',
          'custom_fields.on_sale': "What's Hot?",
          'custom_fields.features': 'Features',
          'custom_fields.pouch_type': 'Pouch Type',
          'custom_fields.style_2': 'Style 2',
          category: 'Category',
          'custom_fields.coverage': 'Coverage',
          'custom_fields.rise': 'Rise',
          'custom_fields.shaping_effect': 'Shaping Effect',
          'custom_fields.packs': 'Packs',
          'custom_fields.shopify_item_group_id': 'Shopify Item Group Id',
          'custom_fields.deal': 'Deals',
          'custom_fields.closure': 'Closure',
          'custom_fields.strap_type': 'Strap Type',
          'custom_fields.support_level': 'Support Level',
          'custom_fields.style': 'Style',
          'custom_fields.padding': 'Padding',
          'custom_fields.band': 'Band',
          'custom_fields.status': 'Status',
          'custom_fields.variant_image_url': 'Variant Image Url',
          'custom_fields.neckline': 'Neckline',
          'custom_fields.satus': 'Satus',
          short_description: 'short description',
        },
        category: {
          maxItemsCount: 10,
          initiallyExpanded: false,
          rowHeight: 20,
          i18n: {
            goBackTitle: 'All Categories',
            more: 'More',
            less: 'Less',
          },
        },
        text: {
          maxItemsCount: 10,
          initiallyExpanded: false,
          rowHeight: 20,
          i18n: {
            more: 'More',
            less: 'Less',
            search: 'Search',
          },
        },
        price: {
          i18n: {
            submit: 'go',
            under: 'Under',
            up: '&amp; up',
          },
        },
        rating: {
          i18n: {
            submit: 'go',
            under: 'Under',
            up: '&amp; up',
          },
        },
        range: {
          i18n: {
            submit: 'go',
            under: 'Under',
            up: '&amp; up',
          },
        },
        i18n: {
          showMobileFacets: 'Filters',
          more: 'More',
          less: 'Less',
          resetAll: 'Clear all',
          reset: 'Clear',
          showResults: 'See results',
          hideFilters: 'Exit filters',
          ok: 'Ok',
          backToFilters: 'Back to menu',
          search: 'Search',
        },
        color: {
          mapping: {
            Black: '#000000',
            Grey: '#999999',
            White: '#FFFFFF',
            Blue: '#0074FF',
            Ivory: '#FFFFF0',
            Nude: '#EBC8B2',
            Green: '#0CCC06',
            Red: '#FF0000',
            Purple: '#662D91',
            Yellow: '#FFE000',
            Pink: '#F492A7',
            Brown: '#A05F08',
            Silver: '#DDDDDD',
            Orange: '#FF9100',
            Gold: '#D8B444',
            Multi:
              'no-repeat center/100% url(https://cdn.shopify.com/s/files/1/1132/2808/files/multi-40x40px.jpg?2145911707392861163)',
            'Animal Print':
              'no-repeat center/100% url(https://cdn.shopify.com/s/files/1/1132/2808/files/animalprint40x40.jpg?2145911707392861163)',
          },
        },
      },
    },
    recommendations: {
      '#product-findify-rec-4': {
        enabled: true,
        slot: 'product-findify-rec-4',
        type: 'purchasedTogether',
        template: 'grid',
        title: 'A Perfect Match',
        limit: 2,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#product-findify-rec-1': {
        enabled: true,
        slot: 'product-findify-rec-1',
        type: 'latest',
        template: 'grid',
        title: 'Recently Viewed',
        limit: 2,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#home-findify-rec-3': {
        enabled: true,
        slot: 'home-findify-rec-3',
        type: 'latest',
        template: 'slider',
        title: 'Products you recently viewed',
        limit: 10,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#cart-findify-rec-1': {
        enabled: true,
        slot: 'cart-findify-rec-1',
        type: 'latest',
        template: 'grid',
        title: 'Products you recently viewed',
        limit: 6,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#product-findify-rec-3': {
        enabled: true,
        slot: 'product-findify-rec-3',
        type: 'bought',
        template: 'grid',
        title: 'You May Also Like',
        limit: 10,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#product-findify-rec-2': {
        enabled: true,
        slot: 'product-findify-rec-2',
        type: 'viewed',
        template: 'grid',
        title: 'People Who Viewed This Also Viewed',
        limit: 6,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
      '#category-findify-rec-1': {
        enabled: true,
        slot: 'category-findify-rec-1',
        type: 'latest',
        template: 'grid',
        title: 'Products you recently viewed',
        limit: 6,
        multipleIds: false,
        minResultsToShow: 1,
        product: {
          title: {
            display: true,
          },
          rating: {
            display: false,
          },
          description: {
            display: false,
          },
          price: {
            display: true,
          },
          stickers: {
            display: false,
          },
          variants: {
            display: false,
          },
          availability: {
            display: false,
          },
          i18n: {
            colorsAvailable: 'Colors available',
          },
        },
      },
    },
  },
  stickers: {
    'out-of-stock': {
      template: 'Temporarily out of stock',
    },
  },
  frameDisabled: true,
  useSimpleLoader: false,
  collections: [
    'collections/mens-sale-high-to-low',
    'collections/mens-2-for-29',
    'collections/mens-socks',
    'collections/mens-underwear-deal',
    'collections/womens-vanity-fair-clearance',
    'collections/womens-bra-sport-low-impact',
    'collections/womens-natori-bras-clearance',
    'collections/womens-body-wrap-shapewear',
    'collections/womens-spanx',
    'collections/womens-bras-wire-style-underwire',
    'collections/womens-calvin-klein',
    'collections/womens-naked',
    'collections/mens-underwear-pouch-style-anatomical-pouch',
    'collections/women-bras-sport-medium-impact',
    'collections/womens-2xist',
    'collections/womens-calvin-klein-bras',
    'collections/women-bras-sport-high-impact',
    'collections/womens-bras-sports-bra-coverage-style-full-coverage',
    'collections/womens-le-mystere-bras',
    'collections/womens-curvy-kate-bras',
    'collections/womens-simone-perele',
    'collections/womens-cosabella',
    'collections/womens-marie-jo',
    'collections/mens-malebasics',
    'collections/womens-shapewear-leggings',
    'collections/mens-gregg-homme-underwear-thong',
    'collections/womens-bras-sexy-sale',
    'collections/mens-gregg-homme-underwear-g-string',
    'collections/mens-underwear-pouch-style-no-pouch',
    'collections/womens-bras-minimizer-closure-style-front-closure',
    'collections/mens-frigo',
    'collections/mens-underwear-function-style-athletic',
    'collections/mens-shapewear-waist-cincher',
    'collections/bra-accessories',
    'collections/womens-on-sale',
    'collections/womens-panties-clearance',
    'collections/mens-underwear',
    'collections/mens-activewear-tanks',
    'collections/mens-shapewear-shaping-effect-back',
    'collections/womens-panties-on-sale',
    'collections/men-activewear-shorts',
    'collections/womens-bras-new-arrivals',
    'collections/mens-jack-adams',
    'collections/womens-sleepwear-new-arrivals',
    'collections/mens-shapewear-brief',
    'collections/womens-dolce-vita',
    'collections/womens-activewear-clothing',
    'collections/mens-calvin-klein-underwear-brief',
    'collections/mens-shapewear-shaping-shirt',
    'collections/womens-new-arrivals',
    'collections/mens-mob',
    'collections/womens-olga',
    'collections/mens-players',
    'collections/mens-shapewear-shaping-underwear',
    'collections/mens-fruit-of-the-loom',
    'collections/womens-calvin-klein-panties',
    'collections/womens-bras-back-smoothing',
    'collections/mens-saxx',
    'collections/mens-clever',
    'collections/mens-socks-casual',
    'collections/womens-bras-side-smoothing',
    'collections/mens-shapewear-shaping-effect-waist',
    'collections/mens-duofold',
    'collections/men-activewear-tops',
    'collections/mens-fruit-of-the-loom',
    'collections/womens-shapewear-new-arrivals',
    'collections/mens-pump',
    'collections/spanx-assets-red-hot-40-off',
    'collections/mens-petit-q',
    'collections/all',
    'collections/womens-rene-rofe',
    'collections/womens-chantelle',
    'collections/mens-sculptees',
    'collections/womens-cheeky',
    'collections/mens-falke',
    'collections/mens-spanx',
    'collections/womens-hanky-panky',
    'collections/womens-bras-size-36h',
    'collections/womens-exposed',
    'collections/womens-hue',
    'collections/mens-underwear-sexy',
    'collections/mens-wigwam',
    'collections/mens-packs',
    'collections/womens-champion',
    'collections/bali-and-playtex-bras-buy-1-get-1-75-off',
    'collections/womens-dkny',
    'collections/womens-tommy-hilfiger',
    'collections/buy-1-get-1-50-off',
    'collections/womens-moving-comfort',
    'collections/womens-leggs',
    'collections/mens-new-arrivals',
    'collections/womens-gossard',
    'collections/womens-doreanse',
    'collections/mens-papi',
    'collections/womens-activewear',
    'collections/womens-hosiery-on-sale',
    'collections/mens-papi-t-shirts',
    'collections/mens-male-power-and-gregg-homme',
    'collections/mens-sale-plus-clearance',
    'collections/womens-panties-calvin-klein-sale',
    'collections/mens-gigo',
    'collections/womens-sale-plus-clearance',
    'collections/mens-briefs-sale',
    'collections/agacio-menseus-intymen-sale',
    'collections/mens-jockey',
    'collections/mens-mensuas',
    'collections/womens-parfait-by-affinitas',
    'collections/womens-sleepwear-babydolls',
    'collections/womens-bras-minimizer-on-sale',
    'collections/mens-grip',
    'collections/mens-doreanse',
    'collections/womens-bras-sports-bra-clearance',
    'collections/womens-bras-features-style-minimizer',
    'collections/mens-underwear-boxer-short',
    'collections/mens-calvin-klein-100-cotton-underwear-boxer-brief',
    'collections/womens-wacoal-bra-bralette',
    'collections/mens-butt-enhancing',
    'collections/womens-donna-karan-hosiery',
    'collections/mens-butt-pads',
    'collections/womens-hanes-hosiery',
    'collections/womens-clearance',
    'collections/womens-sale-and-clearance',
    'collections/womens-bras-size-34ddd',
    'collections/womens-panties-g-string',
    'collections/womens-shapewear-waist-cincher',
    'collections/womens-dkny-hosiery',
    'collections/mens-diesel-t-shirts',
    'collections/mens-brands',
    'collections/women-plus-men-2xist',
    'collections/womens-panties',
    'collections/womens-le-mystere',
    'collections/mens-underwear-jockstrap-features-style-multi-pack',
    'collections/mens-t-shirts-neckline-style-deep-v-neck',
    'collections/womens-bras-size-30dd',
    'collections/mens-t-shirts-tank',
    'collections/womens-spanx-shapewear',
    'collections/womens-wacoal-panties',
    'collections/mens-swimwear-swim-shorts',
    'collections/womens-bras-features-style-cami',
    'collections/womens-sleepwear-pajama-separates',
    'collections/womens-assets-red-hot-label',
    'collections/womens-athleisure-collection',
    'collections/mens-underwear-boxer-brief',
    'collections/womens-shapewear-leg-shapers',
    'collections/mens-underwear-special-sizes-tall',
    'collections/mens-polo-ralph-lauren',
    'collections/mens-activewear',
    'collections/womens-wacoal-on-sale',
    'collections/womens-bras-sports-bra',
    'collections/womens-bras-features-style-balconette',
    'collections/womens-panties-brief',
    'collections/mens-clearance',
    'collections/womens-bras-features-style-strapless',
    'collections/mens-papi-underwear',
    'collections/mens-underwear-performance-features-style-moisture-wicking',
    'collections/womens-elomi-bras',
    'collections/mens-t-shirts-v-neck',
    'collections/womens-calvin-klein-bras-clearance',
    'collections/mens-leo',
    'collections/mens-addicted',
    'collections/mens-t-shirts',
    'collections/mens-agacio',
    'collections/mens-blue-line',
    'collections/mens-on-sale',
    'collections/mens-2xist-shapewear',
    'collections/mens-go-softwear-shapewear',
    'collections/womens-parisa',
    'collections/womens-bras-full-busted-sale',
    'collections/womens-sexy',
    'collections/mens-hanes-and-champion-sale',
    'collections/mens-underwear-trunk',
    'collections/womens-hanes-brands-sale',
    'collections/mens-calvin-klein-underwear-pouch-style-contour-pouch',
    'collections/mens-charles-archer',
    'collections/mens-tommy-john-clearance',
    'collections/womens-hanes',
    'collections/womens-bras-unlined',
    'collections/womens-glamorise',
    'collections/mens-underwear-rise-style-low-rise',
    'collections/mens-pistol-pete',
    'collections/womens-panties',
    'collections/womens-calvin-klein-panties-thong',
    'collections/womens-goddess',
    'collections/womens-chantelle-on-sale',
    'collections/womens-sleepwear-robes',
    'collections/womens-fantasie',
    'collections/mens-hugo-boss',
    'collections/mens-comfort',
    'collections/mens-petit-q-underwear',
    'collections/mens-socks-on-sale',
    'collections/mens-x-rated',
    'collections/mens-big-balls',
    'collections/mens-gregg-homme-nude-underwear',
    'collections/womens-anita',
    'collections/mens-joe-snyder-underwear',
    'collections/womens-bras-features-style-leisure',
    'collections/womens-sleepwear-sleepshirts',
    'collections/mens-big',
    'collections/womens-hosiery-pantyhose-on-sale',
    'collections/mens-intymen',
    'collections/womens-elomi-bras-on-sale',
    'collections/mens-rounderbum',
    'collections/mens-underwear-jockstrap-on-sale',
    'collections/mens-c-in2',
    'collections/womens-sleepwear-sleep-tees',
    'collections/mens',
    'collections/womens-glamorise-bras-on-sale',
    'collections/womens-bras-sports-bra-closure-style-back-closure',
    'collections/mens-tommy-hilfiger',
    'collections/womens-sleepwear-bodysuit',
    'collections/womens-panties-garter-belt',
    'collections/womens-heidi-klum-intimates',
    'collections/womens-bali-shapewear',
    'collections/womens-primadonna',
    'collections/womens-shapewear-target-arear-waist',
    'collections/womens-jezebel',
    'collections/womens-shapewear-target-area-hips',
    'collections/womens-shapewear-target-area-back',
    'collections/womens-shapewear-target-area-thighs',
    'collections/bali-comfort-revolution-wirefree-bra-nude-jacquard',
    'collections/womens-shapewear-target-area-rear',
    'collections/womens-bras-figure-style-full-bust',
    'collections/womens',
    'collections/womens-fantasie-bras',
    'collections/mens-shapewear-tank-tops',
    'collections/womens-hosiery-leggings',
    'collections/mens-calvin-klein-underwear-on-sale',
    'collections/womens-b-temptd-by-wacoal',
    'collections/womens-juniors',
    'collections/womens-carnival',
    'collections/womens-bras-features-style-nursing',
    'collections/womens-panties-thong-on-sale',
    'collections/womens-bali-bras-minimizer',
    'collections/mens-joe-snyder',
    'collections/mens-underwear-boxer-brief-pouch-style-contour-pouch',
    'collections/womens-bras-closure-back-hook',
    'collections/mens-activewear',
    'collections/mens-underwear-enhancement-type-style-sling',
    'collections/mens-obviously-underwear',
    'collections/womens-glamorise-bras-figure-style-full-figure',
    'collections/womens-bras-features-style-lace',
    'collections/womens-bras-sports-bra-size-40g',
    'collections/womens-dominique',
    'collections/womens-panache-bras-on-sale',
    'collections/womens-bras-features-style-posture',
    'collections/womens-panachewomens-panache',
    'collections/womens-natori',
    'collections/mens-jockey-t-shirts',
    'collections/mens-underwear-boxer-brief-on-sale',
    'collections/womens-va-bien',
    'collections/mens-blue-line-underwear',
    'collections/womens-shapewear-slips',
    'collections/womens-ongossamer',
    'collections/womens-rosa-faia',
    'collections/full-busted-28-36-dd',
    'collections/womens-commando',
    'collections/mens-tall',
    'collections/womens-enell',
    'collections/womens-figure-style-full-figure',
    'collections/mens-underwear-features-style-multi-pack',
    'collections/mens-pistol-pete-underwear',
    'collections/womens-panties-figure-style-full-figure',
    'collections/womens-playtex-bras-figure-style-full-figure',
    'collections/womens-maidenform',
    'collections/womens-hosiery-knee-highs',
    'collections/womens-shapewear-wear-your-own-bra',
    'collections/mens-jockey-underwear',
    'collections/mens-underwear-brief',
    'collections/mens-x-rated',
    'collections/rago-and-true-shapers',
    'collections/mens-wood',
    'collections/mens-hanes',
    'collections/womens-panties-brief-features-style-full-coverage',
    'collections/mens-clever-underwear-thong',
    'collections/womens-shapewear-bodybriefer',
    'collections/mens-fruit-of-the-loom-underwear-boxer-brief',
    'collections/mens-jack-adams',
    'collections/womens-freya-bras',
    'collections/mens-calvin-klein-underwear-boxer-brief',
    'collections/womens-bras',
    'collections/women-bras-sexy',
    'collections/mens-fruit-of-the-loom-underwear',
    'collections/mens-gregg-homme-underwear-features-style-revealing',
    'collections/womens-bras-sports-bra-size-34ddd',
    'collections/womens-shadowline',
    'collections/womens-bras-convertible',
    'collections/men-es-and-addicted',
    'collections/womens-bali-bras',
    'collections/mens-underwear-fabric-style-sheer',
    'collections/womens-hue-hosiery',
    'collections/womens-natori-bras-on-sale',
    'collections/mens-c-in2-on-sale',
    'collections/womens-hosiery-pantyhose',
    'collections/men-activewear-pants',
    'collections/mens-underwear-new-arrivals',
    'collections/mens-underwear-accessories',
    'collections/womens-playtex-bras-clearance',
    'collections/mens-es',
    'collections/womens-panache',
    'collections/womens-activewear-on-sale',
    'collections/womens-hosiery-tights',
    'collections/mens-sleepwear-new-arrivals',
    'collections/mens-activewear-new-arrivals',
    'collections/womens-hosiery-socks',
    'collections/mens-shapewear-new-arrivals',
    'collections/mens-male-power',
    'collections/mens-hanes-t-shirts',
    'collections/mens-underwear-g-string',
    'collections/mens-t-shirts-tank-top-neckline-style-square-neck',
    'collections/womens-glamorise-bras-closure-style-front-closure',
    'collections/womens-panties-tanga',
    'collections/mens-underwear-sale-low-to-high',
    'collections/womens-bras-figure-style-full-figure',
    'collections/mens-socks-athletic',
    'collections/mens-sport',
    'collections/womens-ongossamer-panties',
    'collections/mens-sleepwear-loungewear',
    'collections/womens-shapewear-mid-thigh-shapers',
    'collections/mens-munsingwear',
    'collections/mens-t-shirts-1',
    'collections/mens-underwear-g-string-rise-style-extreme-low-rise',
    'collections/womens-amoena',
    'collections/womens-leonisa',
    'collections/womens-bras-on-sale',
    'collections/womens-bras-sports-bra-features-style-side-support',
    'collections/womens-bras-size-30d',
    'collections/womens-shock-absorber-bras',
    'collections/womens-chantelle-bras',
    'collections/mens-shapewear-t-shirt',
    'collections/womens-glamorise-bras',
    'collections/womens-olga-bras-on-sale',
    'collections/womens-bras-minimizer-features-style-side-support',
    'collections/womens-panties-new-arrivals',
    'collections/mens-underwear-on-sale',
    'collections/mens-t-shirts-on-sale',
    'collections/mens-shapewear-support-medium',
    'collections/mens-shapewear-on-sale',
    'collections/womens-shadowline-panties-brief',
    'collections/womens-elomi',
    'collections/mens-shapewear-support-firm',
    'collections/mens-shapewear-shaping-effect-all-over',
    'collections/mens-swimwear-on-sale',
    'collections/mens-male-power-underwear',
    'collections/mens-jockey-underwear-clearance',
    'collections/womens-bras-sports-bra-size-34g',
    'collections/mens-underwear-bikini-size-l-rise-style-extreme-low-rise',
    'collections/womens-bralette-tshirt-push-up',
    'collections/womens-wacoal-bras',
    'collections/womens-hosiery-footless',
    'collections/womens-bras-bustier',
    'collections/mens-tommy-hilfiger-t-shirts',
    'collections/womens-bras-minimizer',
    'collections/mens-shapewear-butt-pads',
    'collections/mens-underwear-clearance',
    'collections/womens-bras-sports-bra-size-38ddd',
    'collections/womens-bras-features-style-everyday-bras',
    'collections/womens-sleepwear',
    'collections/womens-rago',
    'collections/womens-trueshapers',
    'collections/womens-maidenform-shapewear',
    'collections/womens-bras-push-up',
    'collections/womens-shapewear-target-area-style-tummy',
    'collections/mens-swimwear-board-short',
    'collections/womens-vanity-fair-panties',
    'collections/womens-bali-bras-on-sale',
    'collections/womens-panties-brief-rise-style-mid-rise',
    'collections/mens-calvin-klein-body-boost-underwear',
    'collections/mens-obviously',
    'collections/mens-hugo-boss-underwear',
    'collections/mens-doreanse-underwear',
    'collections/womens-panties-thong',
    'collections/mens-go-softwear-underwear',
    'collections/womens-panties-brief-features-style-high-cut',
    'collections/womens-bras-coverage-style-minimal-coverage',
    'collections/mens-2xist-underwear',
    'collections/mens-swimwear',
    'collections/womens-bras-size-40b',
    'collections/womens-goddess-bras',
    'collections/mens-calvin-klein-t-shirts',
    'collections/womens-body-wrap',
    'collections/mens-naked',
    'collections/mens-t-shirts-features-style-multi-pack',
    'collections/mens-jockey-stay-new-underwear',
    'collections/mens-2xist',
    'collections/womens-freya-bras-clearance',
    'collections/womens-curvy-kate',
    'collections/womens-playtex-bras-on-sale',
    'collections/womens-comfort',
    'collections/mens-underwear-thong',
    'collections/womens-bras-features-style-t-shirt',
    'collections/mens-leo-shapewear',
    'collections/womens-jockey',
    'collections/mens-tommy-hilfiger-underwear',
    'collections/mens-cocksox',
    'collections/womens-shock-absorber',
    'collections/womens-activewear-tank',
    'collections/mens-diesel-underwear-on-sale',
    'collections/womens-pretty-polly',
    'collections/mens-go-softwear-underwear-jockstrap',
    'collections/womens-elle-macpherson-intimates',
    'collections/womens-simone-perele-bras',
    'collections/womens-leggs-hosiery',
    'collections/mens-naked-t-shirts',
    'collections/womens-bras-features-style-demi',
    'collections/mens-t-shirts-new-arrivals',
    'collections/womens-b-temptd-by-wacoal-panties',
    'collections/mens-underwear-bikini',
    'collections/mens-champion',
    'collections/womens-maidenform-panties',
    'collections/mens-underwear-singlet',
    'collections/womens-freya',
    'collections/womens-lilyette',
    'collections/womens-hosiery-new-arrivals',
    'collections/womens-bras-size-40g',
    'collections/womens-bridal-collection',
    'collections/mens-t-shirts-crew-neck',
    'collections/mens-obviously-anatomax-underwear',
    'collections/womens-trueshapers-shapewear',
    'collections/mens-magic-silk',
    'collections/womens-rago-shapewear',
    'collections/mens-2xist-t-shirts',
    'collections/womens-bras-sports-bra-size-36ddd',
    'collections/mens-underwear-jockstrap',
    'collections/womens-commando-panties',
    'collections/mens-sleepwear-robes',
    'collections/mens-munsingwear-t-shirts',
    'collections/womens-bras-features-style-bandeau',
    'collections/mens-emporio-armani',
    'collections/mens-shapewear-support-light',
    'collections/mens-underwear-special-sizes-big',
    'collections/womens-warners-bras-on-sale',
    'collections/womens-sleepwear-pajama-sets',
    'collections/mens-socks-dress-socks',
    'collections/womens-donna-karan',
    'collections/womens-panties-full-brief',
    'collections/mens-sleepwear-sleep-bottoms',
    'collections/womens-panties-brief-rise-style-high-rise',
    'collections/womens-bras-figure-style-petite',
    'collections/mens-calvin-klein-air-fx-underwear',
    'collections/womens-bras-sports-bra-size-42dd',
    'collections/womens-bali',
    'collections/mens-addicted-underwear',
    'collections/womens-lunaire',
    'collections/mens-pikante',
    'collections/mens-bike-underwear',
    'collections/mens-diesel',
    'collections/mens-c-in2-t-shirts',
    'collections/mens-calvin-klein-100-cotton-underwear',
    'collections/mens-sleepwear-on-sale',
    'collections/womens-bras-sports-bra-size-38d',
    'collections/mens-calvin-klein-underwear-rise-style-mid-rise ',
    'collections/mens-sleepwear',
    'collections/womens-simone-perele-bras-on-sale',
    'collections/mens-underwear-fit-style-big-tall',
    'collections/mens-malebasics-erotic-underwear',
    'collections/mens-diesel-underwear',
    'collections/womens-bras-coverage-style-full-coverage',
    'collections/mens-2xist-underwear-on-sale',
    'collections/mens-c-in2-underwear',
    'collections/mens-gregg-homme-x-rated-underwear',
    'collections/womens-sleepwear-chemises',
    'collections/mens-polo-ralph-lauren-underwear',
    'collections/womens-bras-sports-bra-size-32ddd',
    'collections/mens-candyman',
    'collections/womens-bali-panties',
    'collections/womens-bras-wire-style-wirefree',
    'collections/mens-underwear-rise-style-extreme-low-rise',
    'collections/womens-bras-size-42b',
    'collections/mens-t-shirts-muscle-shirt',
    'collections/womens-bras-features-style-racerback',
    'collections/womens-panties-boyshort',
    'collections/womens-panties-hipster',
    'collections/womens-shapewear-camisoles',
    'collections/womens-shapewear-shaping-panties',
    'collections/womens-warners-bras',
    'collections/womens-qt-intimates',
    'collections/womens-bras-size-32g',
    'collections/womens-wacoal',
    'collections/mens-mansilk',
    'collections/womens-warners',
    'collections/mens-shapewear-body-suit',
    'collections/womens-bras-1',
    'collections/womens-hosiery-thigh-highs',
    'collections/mens-t-shirts-short-sleeve',
    'collections/mens-t-shirts-long-sleeve',
    'collections/underwear',
    'collections/womens-leonisa-shapewear',
    'collections/mens-calvin-klein-underwear',
    'collections/mens-tommy-hilfiger-underwear-boxer-short',
    'collections/mens-hanes-underwear',
    'collections/mens-calvin-klein',
    'collections/mens-ppu',
    'collections/womens-bras-features-style-longline',
    'collections/mens-shapewear',
    'collections/womens-olga-bras',
    'collections/womens-shapewear',
    'collections/womens-maidenform-hosiery',
    'collections/mens-underwear-fabric-style-silk',
    'collections/womens-bras-size-36g',
    'collections/womens-bras-size-38ddd',
    'collections/mens-underwear-profile-enhancing-style-frontal',
    'collections/womens-panache-bras',
    'collections/mens-underwear-long',
    'collections/womens-bras-bralette',
    'collections/mens-bike',
    'collections/womens-bras-clearance',
    'collections/womens-hosiery',
    'collections/womens-vanity-fair-bras',
    'collections/mens-shapewear-shaping-effect-stomach',
    'collections/mens-shapewear-shaping-effect-rear',
    'collections/womens-panties-for-men',
    'collections/mens-calvin-klein-underwear-boxer-brief-pouch-style-contour-pouch-lvl-5',
    'collections/mens-calvin-klein-underwear-rise-style-high-rise',
    'collections/womens-bras-size-30c',
    'collections/womens-hanky-panky-panties',
    'collections/mens-calvin-klein-100-cotton-underwear-boxer-short-lvl-5',
    'collections/womens-bras-sports-bra-size-38g',
    'collections/womens-bras-size-36ddd',
    'collections/womens-bras-sports-bra-size-40dd',
    'collections/womens-bras-sports-bra-size-36dd',
    'collections/mens-calvin-klein-ck-one-underwear',
    'collections/mens-2xist-underwear-jockstrap',
    'collections/mens-go-softwear',
    'collections/womens-bras-contour',
    'collections/womens-bras-minimizer-wire-style-wirefree',
    'collections/womens-lilyette-bras',
    'collections/mens-petit-q-underwear',
    'collections/mens-gregg-homme-underwear',
    'collections/mens-t-shirts-henley',
    'collections/mens-emporio-armani-underwear',
    'collections/womens-vanity-fair',
    'collections/womens-warners-bras-wire-style-wirefree',
    'collections/womens-lunaire-bras',
    'collections/mens-naked-underwear',
    'collections/mens-charles-archer-underwear',
    'collections/womens-warners-panties',
    'collections/womens-bras-size-34g',
    'collections/mens-gregg-homme',
    'collections/womens-primadonna-bras-clearance',
    'collections/mens-t-shirts-tank-top',
    'collections/mens-munsingwear-underwear',
    'collections/womens-bras-size-32ddd',
    'collections/mens-calvin-klein-underwear-trunk',
    'collections/womens-bras-closure-style-front-closure',
    'collections/womens-olga-panties',
    'collections/womens-calvin-klein-bras-on-sale',
    'collections/womens-bras-minimizer-features-style-t-shirt',
    'collections/womens-bras-sports-bra-1',
    'collections/womens-panties-bikini',
    'collections/mens-underwear-boxer-brief-rise-style-high-rise',
    'collections/mens-t-shirts-scoop-neck',
    'collections/womens-playtex-bras-features-style-side-support',
    'collections/mens-t-shirts-square-neck',
    'collections/3-for-19-panties',
    'collections/hanes-sale',
    'collections/womens-playtex-bras',
    'collections/mens-ginch-gonch',
    'collections/womens-mapale',
    'collections/womens-leading-lady',
    'collections/womens-munki-munki',
    'collections/womens-munki-munki',
    'collections/womens-playtex',
    'collections/uk-brands-up-to-40-off',
    'collections/mens-brands-frigo-gigo-petit-q-20-off',
  ],
};