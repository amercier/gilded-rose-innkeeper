import { ITEMS_ADD, ITEMS_FETCH } from '../constants/actionTypes';

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
