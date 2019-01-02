import { delay } from 'redux-saga';
import { call, put, race, take, takeEvery, all } from 'redux-saga/effects';
import { doFetchItems, doSetItems } from '../actions/item';
import { API_URL_ITEMS } from '../constants/api';
import {
  ITEMS_POLL_START,
  ITEMS_POLL_STOP,
  ITEMS_FETCH,
} from '../constants/actionTypes';

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
 * Generate two effects:
 * 1. A call to fetchItems
 * 2. A new ITEMS_SET actions with the items returned by fetchItems.
 *
 * @returns {Generator} A generator that yields a call to fetchItems and a ITEMS_SET action.
 */
export function* handleFetchItems() {
  const items = yield call(fetchItems);
  yield put(doSetItems(items));
}

/**
 * Generate the following effects infinitely:
 * 1. A new ITEMS_FETCH action.
 * 2. A call to wait() with the given delay.
 *
 * @param {number} ms - Time to wait before next poll, in ms.
 * @returns {Generator} A generator that yields infinitely a ITEMS_SET action and a call to wait.
 */
export function* handlePollItems(ms) {
  while (true) {
    yield put(doFetchItems());
    yield call(delay, ms);
  }
}

/**
 * Generate the following effects infinitely:
 * 1. A wait for the ITEMS_POLL_START action.
 * 2. A race between a handlePollItems call and a wait for ITEMS_POLL_STOP. This means effects from
 *    handlePollItems will be treated infinitely, until a ITEMS_POLL_STOP action is received.
 *
 * @returns {Generator} A generator that yields infinitely a wait forITEMS_POLL_START action and the
 * polling race.
 */
function* watchPollItemsStart() {
  while (true) {
    const action = yield take(ITEMS_POLL_START);
    yield race([call(handlePollItems, action.delay), take(ITEMS_POLL_STOP)]);
  }
}

/**
 * Create the items poll start/stop saga.
 *
 * @returns {Generator} The items poll start/stop saga.
 */
export default function* itemsSaga() {
  yield all([takeEvery(ITEMS_FETCH, handleFetchItems), watchPollItemsStart()]);
}
