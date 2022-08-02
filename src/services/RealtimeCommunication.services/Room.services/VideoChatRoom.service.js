import store from '../../../store/store';
import { setOpenRoom, setRoomDetails, setActiveRooms } from '../../../store/actions/room.actions';
import * as SocketConnectionService from '../Socket.services/SocketConnection.service';
import * as WebRTCService from '../WebRTC.services/webRTC.service';

export const createNewRoom = () => {
  const successCallbackFunction = () => {
    store.dispatch(setOpenRoom(true, true));
    SocketConnectionService.createNewRoom();
  };
  const audioOnly = store.getState().room.audioOnly;
  WebRTCService.getLocalStreamPreview(audioOnly, successCallbackFunction);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  const friends = store.getState().friends.friends;
  const rooms = [];
  activeRooms.forEach((room) => {
    friends.forEach((f) => {
      if (f.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUsername: f.username });
      }
    });
  });
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFunction = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    SocketConnectionService.joinRoom({ roomId });
  };
  const audioOnly = store.getState().room.audioOnly;
  WebRTCService.getLocalStreamPreview(audioOnly, successCallbackFunction);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;
  SocketConnectionService.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
