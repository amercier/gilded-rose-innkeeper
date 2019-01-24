import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { Slider } from 'antd';
import { doQualityFilter } from '../actions/item';
import ConnectedQualityFilter, { QualityFilter } from './QualityFilter';

describe('QualityFilter', () => {
  it('renders its components', () => {
    const qualityFilter = shallow(
      <QualityFilter
        min={0}
        max={100}
        marks={[20, 30, 40]}
        rangeStart={10}
        rangeEnd={90}
        onChange={() => {}}
      />,
    );
    expect(qualityFilter).toMatchSnapshot();
  });
});

describe('QualityFilter (Redux-connected)', () => {
  const mockStore = configureStore();

  const initialState = {
    items: [20, 30, 40].map(quality => ({ quality })),
    qualityMin: 0,
    qualityMax: 100,
    qualityRangeStart: 10,
    qualityRangeEnd: 90,
  };

  it('renders without crashing', () => {
    expect(() => {
      mount(
        <Provider store={mockStore(initialState)}>
          <ConnectedQualityFilter />
        </Provider>,
      );
    }).not.toThrow();
  });

  it('uses store properties as <Slider> value', () => {
    const qualityFilter = mount(
      <Provider store={mockStore(initialState)}>
        <ConnectedQualityFilter />
      </Provider>,
    );
    const sliderComponent = qualityFilter.find(Slider).first();
    const { min, max, marks, defaultValue } = sliderComponent.props();
    expect(min).toBe(initialState.qualityMin);
    expect(max).toBe(initialState.qualityMax);
    expect(marks).toMatchSnapshot();
    expect(defaultValue).toStrictEqual([
      initialState.qualityRangeStart,
      initialState.qualityRangeEnd,
    ]);
  });

  it('triggers an "ITEMS_QUALITY_FILTER" action on <Input> change', () => {
    const store = mockStore(initialState);
    const qualityFilter = mount(
      <Provider store={store}>
        <ConnectedQualityFilter />
      </Provider>,
    );
    const sliderComponent = qualityFilter.find(Slider).first();
    sliderComponent.props().onChange([20, 90]);
    sliderComponent.props().onChange([20, 80]);
    expect(store.getActions()).toStrictEqual([
      doQualityFilter(20, 90),
      doQualityFilter(20, 80),
    ]);
  });
});
