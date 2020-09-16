import cookies from 'js-cookie';

export function setTokenCookie(payload: any) {
  cookies.set('paperIdToken', payload);
}

export function setRefreshToken(payload: any) {
  cookies.set('paperIdRefreshToken', payload);
}

export function getToken() {
  return cookies.get('paperIdToken');
}

export function getRefreshToken() {
  return cookies.get('paperIdRefreshToken');
}

export function removeAuthCookie() {
  cookies.remove('paperIdToken');
}
