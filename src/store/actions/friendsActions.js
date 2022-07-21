import * as authApi from '../../networking/api/authApi';
import { openAlertMessage } from './alertActions';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    payload: {
      pendingFriendsInvitations,
    },
  };
};

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await authApi.sendFriendInvitation(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation sent!'));
      closeDialogHandler();
    }
  };
};

export const acceptFriendInvitation = ({ requestData }) => {
  return async (dispatch) => {
    const response = await authApi.acceptFriendInvitation(requestData);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation accepted!'));
    }
  };
};

export const rejectFriendInvitation = ({ requestData }) => {
  return async (dispatch) => {
    const response = await authApi.rejectFriendInvitation(requestData);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation rejected!'));
    }
  };
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) =>
      dispatch(acceptFriendInvitation({ requestData: data })),
    rejectFriendInvitation: (data) =>
      dispatch(rejectFriendInvitation({ requestData: data })),
  };
};

export default getActions;
