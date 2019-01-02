import {
  ITEMS_POLL_START,
  ITEMS_POLL_STOP,
  ITEMS_FETCH,
  ITEMS_FETCH_ERROR,
  ITEMS_SET,
  ITEMS_NAME_SEARCH,
  ITEMS_QUALITY_FILTER,
} from '../constants/actionTypes';
import {
  ITEMS_POLL_DELAY,
  ITEMS_SLIDER_FILTER_DEBOUNCE,
} from '../constants/config';

/**
 * Create an action to start polling items every ITEMS_POLL_DELAY ms, until a ITEMS_POLL_STOP action
 * is triggered.
 *
 * @returns {Object} An action that consists in starting polling items.
 */
export const doStartPollingItems = () => ({
  type: ITEMS_POLL_START,
  delay: ITEMS_POLL_DELAY,
});

/**
 * Create an action to stop polling items.
 *
 * @returns {Object} An action that consists in stopping polling items.
 */
export const doStopPollingItems = () => ({
  type: ITEMS_POLL_STOP,
});

/**
 * Create an action to add items.
 *
 * @param {Item[]} items - Items to add.
 * @returns {Object} An action that consists in adding the given items.
 */
export const doSetItems = items => ({
  type: ITEMS_SET,
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
 * Create an action to handle an items fetch error.
 *
 * @param {Error} error - Error thrown during fetch.
 * @returns {Object} An action that consists in hnadling items fetch error.
 */
export const doFetchItemError = error => ({
  type: ITEMS_FETCH_ERROR,
  error,
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
      time: ITEMS_SLIDER_FILTER_DEBOUNCE,
    },
  },
});
