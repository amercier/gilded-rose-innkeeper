import {
  ITEMS_ADD,
  ITEMS_NAME_SEARCH,
  ITEMS_QUALITY_FILTER,
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
  qualityRangeStart: 0,
  qualityRangeEnd: 100,
};

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
      return { ...state, items: action.items };
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
    default:
      return state;
  }
}

export default itemReducer;
