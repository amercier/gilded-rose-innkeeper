import { NOTIFICATION } from '../constants/actionTypes';

/**
 * Create an action to display a notification.
 *
 * @param {string} message - Notification main message.
 * @param {string} description - Notification description.
 * @returns {Object} An action that consists in adding the given items.
 */
export const doNotification = (message, description) => ({
  type: NOTIFICATION,
  message,
  description,
});
