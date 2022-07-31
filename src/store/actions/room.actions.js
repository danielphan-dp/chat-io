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
