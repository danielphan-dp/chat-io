import apiClient from './apiClient';
import { logout } from '../../shared/utils/auth';

// ------------------------
// | Token Authentication |
// ------------------------
apiClient.interceptors.request.use(
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

// -----------------
// | Public Routes |
// -----------------
// Register a new account
export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// Log-in authentication if an account has been created
export const login = async (data) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

// -----------------
// | Secure Routes |
// -----------------
// Sending friend invitation to another user
export const sendFriendInvitation = async (requestData) => {
  try {
    return await apiClient.post('/friend-invitation/invite', requestData);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// Accept friend invitation from another user
export const acceptFriendInvitation = async (requestData) => {
  try {
    return await apiClient.post('/friend-invitation/accept', requestData);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// Reject friend invitation from another user
export const rejectFriendInvitation = async (requestData) => {
  try {
    return await apiClient.post('/friend-invitation/reject', requestData);
  } catch (exception) {
    checkResponseCode(exception);
    return {
      error: true,
      exception,
    };
  }
};

// ------------------------
// | Malicious User Guard |
// ------------------------
// Check if the server has detected the user is trying to access a secure route.
// If yes, the user will be logged out.
export const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
