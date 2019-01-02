import { call, takeEvery, all } from 'redux-saga/effects';
import { notification } from 'antd';
import { NOTIFICATION } from '../constants/actionTypes';

/**
 * Display a notification.
 *
 * @param {string} message - Notification header.
 * @param {string} description - Notification description.
 * @returns {void} Nothing.
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
 * @returns {Generator} A generator that calls notify.
 */
export function* handleNotification({ message, description }) {
  yield call(notify, message, description);
}

/**
 * Create the items poll start/stop saga.
 *
 * @returns {Generator} The items poll start/stop saga.
 */
export default function* notificationsSaga() {
  yield all([takeEvery(NOTIFICATION, handleNotification)]);
}
