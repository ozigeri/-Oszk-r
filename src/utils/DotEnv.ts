const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APP_NAME = import.meta.env.VITE_APP_NAME;
const AUTH_ENABLED = import.meta.env.VITE_AUTH_ENABLED;

export default {
    baseURL: BASE_URL,
    appName: APP_NAME,
    authEnabled: AUTH_ENABLED == 'true',
};
