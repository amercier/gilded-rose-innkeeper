import React from 'react';
import { shallow } from 'enzyme';
import Trend from './Trend';

describe('Trend', () => {
  it('renders a grey minus for 0', () => {
    expect(shallow(<Trend value={0} />)).toMatchSnapshot();
  });

  it('renders a red up arrow for negative numbers', () => {
    expect(shallow(<Trend value={-1} />)).toMatchSnapshot();
    expect(shallow(<Trend value={-10} />)).toMatchSnapshot();
    expect(shallow(<Trend value={-123456} />)).toMatchSnapshot();
  });

  it('renders a green down arrow for positive numbers', () => {
    expect(shallow(<Trend value={1} />)).toMatchSnapshot();
    expect(shallow(<Trend value={10} />)).toMatchSnapshot();
    expect(shallow(<Trend value={123456} />)).toMatchSnapshot();
  });
});
