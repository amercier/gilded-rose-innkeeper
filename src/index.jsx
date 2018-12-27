import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

/**
 * @typedef Item
 *
 * Item.
 *
 * @type {Object}
 * @property {string} id - Item unique identifier.
 * @property {string} name - Item name.
 * @property {number} sellIn - Sell price.
 * @property {number} quality - Quality (between 0 and 100).
 * @property {string} type - Type of item: "STANDARD", "CONJURED", "BACKSTAGE_PASS" or "LEGENDARY".
 */

const items = [
  {
    id: '1a08fbee-7d5c-4450-9636-0facebd3a6a2',
    name: '+5 Dexterity Vest',
    sellIn: 10,
    quality: 20,
    type: 'STANDARD',
  },
  {
    id: 'c4d98141-bd03-4ef1-9585-6ebdc0429ae2',
    name: 'Aged Brie',
    sellIn: 2,
    quality: 0,
    type: 'STANDARD',
  },
  {
    id: '0cf3f50b-cea6-4b39-b6da-330eb973b07a',
    name: 'Elixir of the Mongoose',
    sellIn: 5,
    quality: 7,
    type: 'STANDARD',
  },
  {
    id: 'a99b8527-6a28-4a53-98da-754788e78397',
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 2147483647,
    quality: 100,
    type: 'LEGENDARY',
  },
  {
    id: 'd61cd250-bde3-4355-8059-30768a2b7813',
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 2147483647,
    quality: 80,
    type: 'LEGENDARY',
  },
  {
    id: '03369719-af09-4c21-9f69-d07a288cb4d8',
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 15,
    quality: 20,
    type: 'BACKSTAGE_PASS',
  },
  {
    id: '39419977-5469-43cf-907b-7ea4561c7a3b',
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 10,
    quality: 49,
    type: 'BACKSTAGE_PASS',
  },
  {
    id: '22aa6f1e-0792-4987-a4d5-161a180ae54b',
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 5,
    quality: 49,
    type: 'BACKSTAGE_PASS',
  },
  {
    id: '22b152b1-caac-4011-88de-b5180de0e452',
    name: 'Conjured Mana Cake',
    sellIn: 3,
    quality: 6,
    type: 'CONJURED',
  },
];

ReactDOM.render(<App items={items} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
