// --------------------------
// | Packages and Libraries |
// --------------------------
// SocketIO (client side)
import io from 'socket.io-client';

// Redux store functionalities for state management
import store from '../../store/store';
import {
  setFriends,
  setPendingFriendsInvitations,
  setOnlineUsers,
} from '../../store/actions/friendsActions';

// ----------------------------------------------
// | The Web Socket for Client-Server Interface |
// ----------------------------------------------
let socket = null;

// ---------------------------
// | Client-Server Interface |
// ---------------------------
export const connectWithSocketServer = (userDetails) => {
  // connect to the back-end server, using the JWT token
  const jwtToken = userDetails.token;
  socket = io('http://localhost:5002', {
    auth: { token: jwtToken },
  });

  // -- SERVER SIGNAL LISTENERS --
  // SERVER SIGNAL: connect
  // signal when successfully connect
  socket.on('connect', (serverData) => {
    // LOG: remove when finished testing
    // console.log(
    //   'Server signal: connect. Successfully connected with socket.io server.'
    // );
    // console.log(socket.id);
  });

  // SERVER SIGNAL: friends-invitations
  // signal when there is new pending invitations
  socket.on('friends-invitations', (serverData) => {
    // LOG: remove when finished testing
    // console.log(
    //   'Server signal: friends-invitations. Successfully receive pending friends invitations.'
    // );
    // console.log(serverData);

    // update Redux store
    const { pendingInvitations } = serverData;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  // SERVER SIGNAL: friends-list
  socket.on('friends-list', (serverData) => {
    // LOG: remove when finished testing
    // console.log(
    //   'Server signal: friends-list. Successfully receive friends list.'
    // );
    // console.log(serverData);

    // update Redux store
    const { friends } = serverData;
    store.dispatch(setFriends(friends));
  });

  // SERVER SIGNAL: online-users
  socket.on('online-users', (serverData) => {
    // LOG: remove when finished testing
    // console.log(
    //   'Server signal: online-users. Successfully receive online users.'
    // );
    // console.log(serverData);

    // update Redux store
    const { onlineUsers } = serverData;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
};
