export const BASE_URL = 'http://localhost:5000';

export const MODULES = {
  AUTH: '/auth',
};

export const AUTH = {
  SIGN_UP: `${MODULES.AUTH}/register`,
  SIGN_IN: `${MODULES.AUTH}/login`,
};
