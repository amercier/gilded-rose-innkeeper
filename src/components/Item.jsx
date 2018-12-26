import React from 'react';
import { number, string, shape } from 'prop-types';

const typeLabels = {
  STANDARD: 'Standard',
  LEGENDARY: 'Legendary',
  BACKSTAGE_PASS: 'Backstage pass',
};

const Item = ({ item: { id, name, sellIn, quality, type } }) => (
  <div data-id={id}>
    <span>{name}</span>
    <span>{sellIn}</span>
    <span>{quality}</span>
    <span>{typeLabels[type]}</span>
  </div>
);

Item.propTypes = {
  item: shape({
    id: string.isRequired,
    name: string.isRequired,
    sellIn: number.isRequired,
    quality: number.isRequired,
    type: string.isRequired,
  }).isRequired,
};

export default Item;
