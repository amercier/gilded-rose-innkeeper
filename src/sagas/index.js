import { all } from 'redux-saga/effects';
import itemsSaga from './item';
import notificationsSaga from './notification';

/**
 * Create the root saga.
 *
 * @returns {Generator} The root saga.
 */
export default function* rootSaga() {
  yield all([itemsSaga(), notificationsSaga()]);
}
