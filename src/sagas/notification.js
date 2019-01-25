import { call, takeEvery, all } from 'redux-saga/effects';
import { notification } from 'antd';
import { NOTIFICATION } from '../constants/actionTypes';

/**
 * Display a notification.
 *
 * @param {string} message - Notification header.
 * @param {string} description - Notification description.
 * @returns {undefined} Nothing.
 */
export function notify(message, description) {
  notification.open({ message, description });
}

/**
 * Generate an effect that calls notify.
 *
 * @param {Object} data - Notification data.
 * @param {string} data.message - Notification header.
 * @param {string} data.description - Notification description.
 * @returns {Object} An iterator that yields a call to `notify`.
 */
export function* handleNotification({ message, description }) {
  /* eslint-disable redux-saga/no-unhandled-errors */
  yield call(notify, message, description);
  /* eslint-enable redux-saga/no-unhandled-errors */
}

/**
 * Create the items poll start/stop saga.
 *
 * @returns {Object} An iterator that yields the items poll start/stop saga.
 */
export default function* notificationsSaga() {
  /* eslint-disable redux-saga/no-unhandled-errors */
  yield all([takeEvery(NOTIFICATION, handleNotification)]);
  /* eslint-enable redux-saga/no-unhandled-errors */
}
