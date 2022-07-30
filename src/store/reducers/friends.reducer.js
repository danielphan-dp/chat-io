import { FriendsActions } from '../actions.types/friends.actions.types';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // const { friend, pendingFriendsInvitations, onlineUsers } = payload;
  switch (type) {
    case FriendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: payload.friends,
      };
    case FriendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: payload.pendingFriendsInvitations,
      };
    case FriendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: payload.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
