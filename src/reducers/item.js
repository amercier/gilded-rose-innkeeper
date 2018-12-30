import {
  ITEMS_ADD,
  ITEMS_NAME_SEARCH,
  ITEMS_QUALITY_FILTER,
  ITEMS_SELL_IN_FILTER,
} from '../constants/actionTypes';

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

const INITIAL_STATE = {
  items: [],
  nameSearch: '',
  qualityMin: 0,
  qualityMax: 100,
  qualityRangeStart: null,
  qualityRangeEnd: null,
  sellInMin: null,
  sellInMax: null,
  sellInRangeStart: null,
  sellInRangeEnd: null,
};

/**
 * Get the minimum and maximum value of a given property within an array of objects.
 *
 * @param {Objects[]} objects - Objects.
 * @param {string} property - Proprty name.
 * @param {*} defaultMinValue - Value returned as min for an empty array.
 * @param {*} defaultMaxValue - Value returned as max for an empty array.
 * @returns {number[]} - An array containing the min an max value: `[min, max]`.
 */
function getMinMax(objects, property, defaultMinValue, defaultMaxValue) {
  return objects.reduce(
    ([min, max], { [property]: value }) => {
      const newMin = min === defaultMinValue ? value : Math.min(min, value);
      const newMax = max === defaultMaxValue ? value : Math.max(max, value);
      return [newMin, newMax];
    },
    [defaultMinValue, defaultMaxValue],
  );
}

/**
 * Add items and update sellIn min/max values.
 *
 * @param {Object} state - State.
 * @param {Item[]} items - Items to add.
 * @returns {Object} - The new state.
 */
function doItemsAdd(state, items) {
  const [sellInMin, sellInMax] = getMinMax(items, 'sellIn', null, null);
  return {
    ...state,
    items,
    sellInMin,
    sellInMax,
  };
}

/**
 * Item reducer.
 *
 * @param {Object} [state=INITIAL_STATE] - Previous state.
 * @param {string} action - Action type and data.
 * @returns {Object} Next state.
 */
function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ITEMS_ADD: {
      return doItemsAdd(state, action.items);
    }
    case ITEMS_NAME_SEARCH: {
      return { ...state, nameSearch: action.query };
    }
    case ITEMS_QUALITY_FILTER: {
      return {
        ...state,
        qualityRangeStart: action.rangeStart,
        qualityRangeEnd: action.rangeEnd,
      };
    }
    case ITEMS_SELL_IN_FILTER: {
      return {
        ...state,
        sellInRangeStart: action.rangeStart,
        sellInRangeEnd: action.rangeEnd,
      };
    }
    default:
      return state;
  }
}

export default itemReducer;
