/**
 * Base API URL.
 *
 * Use `REACT_APP_API_URL` environment variable is defined, otherwise default to hardcoded value.
 * Note: variable must start with `REACT_APP_`. Read [Adding Custom Environment Variables] for more
 * information.
 *
 * [adding custom environment variables]: https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
 *
 * @type {string}
 */
const API_URL_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export const API_URL_ITEMS = `${API_URL_BASE}/items/`;
