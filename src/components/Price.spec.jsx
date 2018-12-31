import React from 'react';
import { shallow } from 'enzyme';
import Price from './Price';

describe('Price', () => {
  it('renders the value for small numbers', () => {
    [0, 10, 100, 999].forEach(smallNumber => {
      const price = shallow(<Price value={smallNumber} />);
      expect(price.text()).toBe(`${smallNumber}`);
    });
  });

  it('renders a tooltip for large numbers', () => {
    [1000, 123456, 123456789].forEach(largeNumber => {
      const price = shallow(<Price value={largeNumber} />);
      expect(price).toMatchSnapshot();
    });
  });
});
