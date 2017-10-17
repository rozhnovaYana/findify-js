import * as React from 'react';
import Button, { Props } from '..';

describe('<Button />', () => {
  it('renders correctly', () => {
    const properties: Props[] = [
      {},
      { className: 'foo' },
      {
        className: 'bar',
        children: <div>children div</div>,
      },
    ];
    properties.forEach((props: Props) => {
      const component = render(<Button {...props} />);
      expect(component).toMatchSnapshot();
    });
  });

  it('attaches and calls onClick event handler', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
});