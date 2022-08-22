import { RoomActions } from './room.actions.types';

const initialState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
  isUserJoinedWithOnlyAudio: false,
};

const roomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RoomActions.OPEN_ROOM:
      return {
        ...state,
        isUserInRoom: payload.isUserInRoom,
        isUserRoomCreator: payload.isUserRoomCreator,
      };
    case RoomActions.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: payload.roomDetails,
      };
    case RoomActions.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: payload.activeRooms,
      };
    case RoomActions.SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: payload.localStream,
      };
    case RoomActions.SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: payload.audioOnly,
      };
    case RoomActions.SET_REMOTE_STREAMS:
      return {
        ...state,
        remoteStreams: payload.remoteStreams,
      };
    case RoomActions.SET_SCREEN_SHARING_STREAM:
      return {
        ...state,
        isScreenSharingActive: payload.isScreenSharingActive,
        screenSharingStream: payload.screenSharingStream,
      };
    case RoomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
      return {
        ...state,
        isUserJoinedWithOnlyAudio: payload.isUserJoinedWithOnlyAudio,
      };
    default:
      return state;
  }
};

export default roomReducer;
