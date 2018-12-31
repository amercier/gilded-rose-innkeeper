import { call, put, race, take } from 'redux-saga/effects';
import { doAddItems } from '../actions/item';
import { API_URL_ITEMS } from '../constants/api';
import { ITEMS_POLL_START, ITEMS_POLL_STOP } from '../constants/actionTypes';

/**
 * Wait a given time.
 *
 * @param {number} duration - Time to wait in milliseconds.
 * @returns {Promise<void>} A Promise that always resolves after `duration` ms.
 */
const wait = duration => new Promise(resolve => setTimeout(resolve, duration));

/**
 * Fetch items from the API.
 *
 * @returns {Promise<Item[]>} All items.
 */
export async function fetchItems() {
  const response = await fetch(API_URL_ITEMS);
  return response.json();
}

/**
 * Handle fetch items request and generate a ITEMS_ADD action.
 *
 * @param {number} delay - Time to wait before next poll, in ms.
 * @returns {Generator} A generator that yields a ITEMS_ADD action.
 */
export function* handleFetchItems(delay) {
  while (true) {
    const items = yield call(fetchItems);
    yield put(doAddItems(items));
    yield call(wait, delay);
  }
}

/**
 * Create the items poll start/stop saga.
 *
 * @returns {Generator} The items poll start/stop saga.
 */
export function* watchPollItemsSaga() {
  while (true) {
    const { delay } = yield take(ITEMS_POLL_START);
    yield race([call(handleFetchItems, delay), take(ITEMS_POLL_STOP)]);
  }
}
