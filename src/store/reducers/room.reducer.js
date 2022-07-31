import { RoomActions } from '../actions.types/room.actions.types';

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
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RoomActions.OPEN_ROOM:
      return {
        ...state,
        isUserInRoom: payload.isUserInRoom,
        isUserRoomCreator: payload.isUserRoomCreator,
      };
    default:
      return state;
  }
};

export default reducer;
