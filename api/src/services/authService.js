import API from '../api-client';
import { AUTH } from '../api-client/urls';

const api = new API();

class AuthService {
  static signUp = (data) => api.post(AUTH.SIGN_UP, data);

  static signIn = (data) => api.post(AUTH.SIGN_IN, data);
}

export default AuthService;
