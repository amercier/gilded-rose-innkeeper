import React from 'react';
import { arrayOf } from 'prop-types';
import Item from './Item';

const Items = ({ items }) => (
  <div>
    {(items || []).map(item => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);

Items.propTypes = {
  items: arrayOf(Item.propTypes.item).isRequired,
};

export default Items;
