import { takeEvery, all } from 'redux-saga/effects';
import { ITEMS_FETCH } from '../constants/actionTypes';
import { handleFetchItems } from './item';

/**
 * Start `handleFetchItems` on every `ITEMS_FETCH` action.
 *
 * @returns {Generator} Generates one result from `handleFetchItems` for each `ITEMS_FETCH` action..
 */
export default function* watchItems() {
  yield all([takeEvery(ITEMS_FETCH, handleFetchItems)]);
}
