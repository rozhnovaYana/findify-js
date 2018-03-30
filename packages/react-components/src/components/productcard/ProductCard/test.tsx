import React from 'react'
import { fromJS } from 'immutable';
import ProductCardView from './view'
import { shallow } from 'enzyme'
import { get as _get } from 'lodash'

const itemMock = fromJS({
  product_url: "https://foo.bar",
  image_url: "https://lorempicsum.net/100/100",
  description: "A description for item",
  thumbnail_url: "https://lorempicsum.net/50/50",
  title: "Product Title",
  price: "9.99",
  reviews: {}
});

const configMock = fromJS({
  productcard: {
    title: {
      display: true,
      lines: 1
    },
    description: {
      display: true,
      lines: 2
    },
    price: {
      display: true
    },
  },
  currency: {}
});

describe('ProductCard view', () => {
  it('renders correctly', () => {
    expect(shallow(
      <ProductCardView
        theme={{}}
        item={itemMock}
        config={configMock}
      />
    )).toMatchSnapshot()
  })
})
