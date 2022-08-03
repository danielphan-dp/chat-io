import store from 'src/store/store';
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setScreenSharingStream,
  setIsUserJoiningWithOnlyAudio,
} from 'src/store/room/room.actions';
import * as SocketConnectionService from './SocketConnection.service';
import * as WebRTCService from './WebRTC.service';

export const createNewRoom = () => {
  const successCallbackFunction = () => {
    store.dispatch(setOpenRoom(true, true));
    store.dispatch(setIsUserJoiningWithOnlyAudio(store.getState().room.audioOnly));
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
  const userId = store.getState().auth.userDetails?._id;
  const friends = store.getState().friends.friends;
  const rooms = [];
  activeRooms.forEach((room) => {
    if (room.roomCreator.userId === userId) {
      rooms.push({ ...room, creatorUsername: 'Me' });
    } else {
      friends.forEach((f) => {
        if (f.id === room.roomCreator.userId) {
          rooms.push({ ...room, creatorUsername: f.username });
        }
      });
    }
  });
  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFunction = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    store.dispatch(setIsUserJoiningWithOnlyAudio(store.getState().room.audioOnly));
    SocketConnectionService.joinRoom({ roomId });
  };
  const audioOnly = store.getState().room.audioOnly;
  WebRTCService.getLocalStreamPreview(audioOnly, successCallbackFunction);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  const localStream = store.getState().room.localStream;
  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }

  store.dispatch(setRemoteStreams([]));
  WebRTCService.closeAllConnections();

  SocketConnectionService.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};
