import {
  ITEMS_FETCH,
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

/**
 * @typedef ChangingItem
 *
 * Item with trends over time.
 *
 * @typedef {Item}
 * @property {number} qualityTrend - Difference in quality during the last quality change.
 * @property {number} sellInTrend - Difference in sellIn during the last sellIn change.
 */

/**
 * Update an item with new.
 *
 * @param {Item|undefined} prevItem - Previous item data, if any.
 * @param {Item} nextItem - New item data.
 * @returns {ChangingItem} A new item with trends properties.
 */
function updatedItem(prevItem, nextItem) {
  const qualityTrend =
    prevItem === undefined
      ? 0
      : nextItem.quality - prevItem.quality || prevItem.qualityTrend; // preserve previous trend if 0
  const sellInTrend =
    prevItem === undefined
      ? 0
      : nextItem.sellIn - prevItem.sellIn || prevItem.sellInTrend; // preserve previous trend if 0
  return {
    ...nextItem,
    qualityTrend,
    sellInTrend,
  };
}

/**
 * Update the state with new items.
 *
 * @param {Object} prevState - Previous state.
 * @param {Item[]} nextItems - New items.
 * @returns {Object} The new state..
 */
function applyAddItems(prevState, nextItems) {
  const prevItems = prevState.items;
  return {
    ...prevState,
    items: nextItems.reduce(
      (items, nextItem) => ({
        [nextItem.id]: updatedItem(prevItems[nextItem.id], nextItem),
        ...items,
      }),
      {},
    ),
    fetchingItems: false,
    fetchedItemsOnce: true,
  };
}

const INITIAL_STATE = {
  items: [],
  fetchingItems: false,
  fetchedItemsOnce: false,
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
    case ITEMS_FETCH: {
      return { ...state, fetchingItems: true };
    }
    case ITEMS_ADD: {
      return applyAddItems(state, action.items);
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
