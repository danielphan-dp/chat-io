// --------------------------
// | Packages and Libraries |
// --------------------------
// SocketIO (client side)
import io from 'socket.io-client';

// Redux store functionalities for state management
import store from '../../store/store';
import { setPendingFriendsInvitations } from '../../store/actions/friendsActions';

// ----------------------------------------------
// | The Web Socket for Client-Server Interface |
// ----------------------------------------------
// TODO: refactor to separate functions
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
  // server signal: connect
  // signal when successfully connect
  socket.on('connect', (serverData) => {
    // TODO: remove when finished testing
    console.log(
      'Server signal: connect. Successfully connected with socket.io server.'
    );
    console.log(socket.id);
  });

  // server signal: friends-invitations
  // signal when there is new pending invitations
  socket.on('friends-invitations', (serverData) => {
    // TODO: remove when finished testing
    console.log(
      'Server signal: friends-invitations. Successfully receive pending friends invitations.'
    );
    console.log(serverData);

    // update Redux store
    const { pendingInvitations } = serverData;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
};
