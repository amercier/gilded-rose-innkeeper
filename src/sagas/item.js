import { call, put } from 'redux-saga/effects';
import { doAddItems } from '../actions/item';
import { API_URL_ITEMS } from '../constants/api';

/**
 * Fetch items from the API.
 *
 * @returns {Promise<Item[]>} All items.
 */
async function fetchItems() {
  const response = await fetch(API_URL_ITEMS);
  return response.json();
}

/**
 * Handle fetch items request and generate a ITEMS_ADD action.
 *
 * @returns {Generator} A generator that yields a ITEMS_ADD action.
 */
function* handleFetchItems() {
  const result = yield call(fetchItems, {});
  yield put(doAddItems(result));
}

export { handleFetchItems };
