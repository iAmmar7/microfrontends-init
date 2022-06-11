import API from "../api";
import * as urls from "../api/urls";

const api = new API();

class AuthService {
  static signUp = (data) => api.post(urls.AUTH.SIGN_UP, data);

  static signIn = (data) => api.post(urls.AUTH.SIGN_IN, data);
}

export default AuthService;
