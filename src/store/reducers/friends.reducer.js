import { friendsActions } from '../actions/friends.actions';

const initialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  // const { friend, pendingFriendsInvitations, onlineUsers } = payload;
  switch (type) {
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: payload.friends,
      };
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: payload.pendingFriendsInvitations,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: payload.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
