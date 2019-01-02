import {
  ITEMS_FETCH,
  ITEMS_FETCH_ERROR,
  ITEMS_SET,
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
 * Update items based on previous state.
 *
 * TODO Move this logic to the API.
 *
 * @param {Item[]} prevItems - Previous items.
 * @param {Item[]} nextItems - New items.
 * @returns {Item[]} The new items.
 */
function updatedItems(prevItems, nextItems) {
  return nextItems.reduce(
    (items, item) => ({
      [item.id]: updatedItem(prevItems[item.id], item),
      ...items,
    }),
    {},
  );
}

const INITIAL_STATE = {
  items: [],
  fetchingItems: false,
  fetchedItemsOnce: false,
  fetchItemsError: null,
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
    case ITEMS_FETCH_ERROR: {
      // TODO Display a notification when the error occur while items exist.
      // TODO Detect whether Internet connection is lost (normal behavior) vs server error.
      return {
        ...state,
        fetchingItems: false,
        fetchedItemsOnce: true,
        fetchItemsError: action.error,
      };
    }
    case ITEMS_SET: {
      return {
        ...state,
        items: updatedItems(state.items, action.items),
        fetchingItems: false,
        fetchedItemsOnce: true,
        fetchItemsError: null,
      };
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
