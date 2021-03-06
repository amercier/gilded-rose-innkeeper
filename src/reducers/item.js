import {
  ITEMS_FETCH,
  ITEMS_FETCH_ERROR,
  ITEMS_SET,
  ITEMS_NAME_SEARCH,
  ITEMS_QUALITY_FILTER,
} from '../constants/actionTypes';

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
export default function itemReducer(state = INITIAL_STATE, action) {
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
        items: action.items,
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
