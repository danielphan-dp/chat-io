import { FriendsActions } from '../actions.types/friends.actions.types';
import * as authApi from '../../networking/api/authApi';
import { openAlertMessage } from './alert.actions';

export const setFriends = (friends) => {
  return {
    type: FriendsActions.SET_FRIENDS,
    payload: {
      friends,
    },
  };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
  return {
    type: FriendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    payload: {
      pendingFriendsInvitations,
    },
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: FriendsActions.SET_ONLINE_USERS,
    payload: {
      onlineUsers,
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

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    setFriends: (data) => dispatch(setFriends({ requestData: data })),
    // TODO: setPendingFriendsInvitations
    // TODO: setOnlineUsers
    sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation({ requestData: data })),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation({ requestData: data })),
  };
};
