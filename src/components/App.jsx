import React from 'react';
import { arrayOf } from 'prop-types';
import Items from './Items';
import Item from './Item';

const App = ({ items }) => (
  <div>
    <Items items={items} />
  </div>
);

App.propTypes = {
  items: arrayOf(Item.propTypes.item).isRequired,
};

export default App;
