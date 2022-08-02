import { RoomActions } from '../actions.types/room.actions.types';

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
  return {
    type: RoomActions.OPEN_ROOM,
    payload: {
      isUserRoomCreator,
      isUserInRoom,
    },
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: RoomActions.SET_ROOM_DETAILS,
    payload: {
      roomDetails,
    },
  };
};

export const setActiveRooms = (activeRooms) => {
  return {
    type: RoomActions.SET_ACTIVE_ROOMS,
    payload: {
      activeRooms,
    },
  };
};

export const setLocalStream = (localStream) => {
  return {
    type: RoomActions.SET_LOCAL_STREAM,
    payload: {
      localStream,
    },
  };
};
