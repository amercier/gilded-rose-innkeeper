import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { Input } from 'antd';
import { doNameSearch } from '../actions/item';
import ConnectedNameSearch, { NameSearch } from './NameSearch';

describe('NameSearch', () => {
  it('renders its components', () => {
    const nameSearch = shallow(
      <NameSearch value="INITIAL VALUE" onChange={() => {}} />,
    );
    expect(nameSearch).toMatchSnapshot();
  });
});

describe('NameSearch (Redux-connected)', () => {
  const mockStore = configureStore();

  it('renders without crashing', () => {
    mount(
      <Provider store={mockStore({ nameSearch: '' })}>
        <ConnectedNameSearch />
      </Provider>,
    );
  });

  it('uses "nameSearch" store property as <Input> value', () => {
    const nameSearch = mount(
      <Provider store={mockStore({ nameSearch: 'INITIAL VALUE' })}>
        <ConnectedNameSearch />
      </Provider>,
    );
    const inputComponent = nameSearch.find(Input).first();
    expect(inputComponent.props().value).toBe('INITIAL VALUE');
  });

  it('triggers an "ITEMS_NAME_SEARCH" action on <Input> change', () => {
    const store = mockStore({ nameSearch: '' });
    const nameSearch = mount(
      <Provider store={store}>
        <ConnectedNameSearch />
      </Provider>,
    );
    const inputComponent = nameSearch.find(Input).first();
    const target = { value: 'NEW VALUE' };
    inputComponent.props().onChange({ target });
    expect(store.getActions()).toEqual([doNameSearch('NEW VALUE')]);
  });
});
