import api from './_api.base';
import * as AuthService from '../Auth.service';

// interceptor
api.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// security check
export const performSecurityCheck = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode && (responseCode === 401 || responseCode === 403)) {
    AuthService.logout();
  }
};

// public
export const register = async (data) => {
  try {
    return await api.post('/auth/register', data);
  } catch (exception) {
    return { error: true, exception };
  }
};

// public
export const login = async (data) => {
  try {
    return await api.post('/auth/login', data);
  } catch (exception) {
    return { error: true, exception };
  }
};

// secure
export const sendFriendInvitation = async (requestData) => {
  try {
    return await api.post('/friend-invitation/invite', requestData);
  } catch (exception) {
    performSecurityCheck(exception);
    return { error: true, exception };
  }
};

// secure
export const acceptFriendInvitation = async (requestData) => {
  try {
    return await api.post('/friend-invitation/accept', requestData);
  } catch (exception) {
    performSecurityCheck(exception);
    return { error: true, exception };
  }
};

// secure
export const rejectFriendInvitation = async (requestData) => {
  try {
    return await api.post('/friend-invitation/reject', requestData);
  } catch (exception) {
    performSecurityCheck(exception);
    return { error: true, exception };
  }
};
