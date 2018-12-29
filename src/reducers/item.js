import { ITEMS_ADD } from '../constants/actionTypes';

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
      return {
        items: action.items,
      };
    }
    default:
      return state;
  }
}

export default itemReducer;
