import { all } from 'redux-saga/effects';
import { watchPollItemsSaga } from './item';

/**
 * Create the root saga.
 *
 * @returns {Generator} The root saga.
 */
export default function* rootSaga() {
  yield all([watchPollItemsSaga()]);
}
