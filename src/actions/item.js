import {
  ITEMS_ADD,
  ITEMS_FETCH,
  ITEMS_NAME_SEARCH,
  ITEMS_QUALITY_FILTER,
} from '../constants/actionTypes';

/**
 * Create an action to add items.
 *
 * @param {Item[]} items - Items to add.
 * @returns {Object} An action that consists in adding the given items.
 */
export const doAddItems = items => ({
  type: ITEMS_ADD,
  items,
});

/**
 * Create an action to fetch items.
 *
 * @returns {Object} An action that consists in fetching items.
 */
export const doFetchItems = () => ({
  type: ITEMS_FETCH,
});

/**
 * Create an action to update name search filter.
 *
 * @param {string} query - The new name search query.
 * @returns {Object} An action that consists in updating the name filter.
 */
export const doNameSearch = query => ({
  type: ITEMS_NAME_SEARCH,
  query,
});

/**
 * Create an action to update the quality min/max filter.
 *
 * @param {number} rangeStart - Minimum quality to display.
 * @param {number} rangeEnd - Maximum quality to display.
 * @returns {Object} An action that consists in updating the quality filter.
 */
export const doQualityFilter = (rangeStart, rangeEnd) => ({
  type: ITEMS_QUALITY_FILTER,
  rangeStart,
  rangeEnd,
  meta: {
    debounce: {
      time: 200,
    },
  },
});
