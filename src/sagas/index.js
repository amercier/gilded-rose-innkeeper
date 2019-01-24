import { all } from 'redux-saga/effects';
import itemsSaga from './item';
import notificationsSaga from './notification';

/**
 * Generate the root saga.
 *
 * @returns {Object} An iterable that yields the root saga.
 */
export default function* rootSaga() {
  /* eslint-disable redux-saga/no-unhandled-errors */
  yield all([itemsSaga(), notificationsSaga()]);
  /* eslint-enable redux-saga/no-unhandled-errors */
}
