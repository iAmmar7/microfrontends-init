import jwt_decode from 'jwt-decode';

function isAuthenticated() {
  const token = localStorage.getItem('access_token');
  if (!token) return false;
  const decoded = jwt_decode(token);
  if (Date.now() >= decoded.exp * 1000) return false;
  return true;
}

export default isAuthenticated;
