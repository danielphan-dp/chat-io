import { RoomActions } from './room.actions.types';

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

export const setAudioOnly = (audioOnly) => {
  return {
    type: RoomActions.SET_AUDIO_ONLY,
    payload: {
      audioOnly,
    },
  };
};

export const setRemoteStreams = (remoteStreams) => {
  return {
    type: RoomActions.SET_REMOTE_STREAMS,
    payload: {
      remoteStreams,
    },
  };
};

export const setScreenSharingStream = (stream) => {
  return {
    type: RoomActions.SET_SCREEN_SHARING_STREAM,
    payload: {
      isScreenSharingActive: stream ? true : false,
      screenSharingStream: stream || null,
    },
  };
};

export const setIsUserJoiningWithOnlyAudio = (isUserJoinedWithOnlyAudio) => {
  return {
    type: RoomActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
    payload: {
      isUserJoinedWithOnlyAudio,
    },
  };
};

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    setAudioOnly: (audioOnly) => dispatch(setAudioOnly(audioOnly)),
    setRemoteStreams: (remoteStreams) => dispatch(setRemoteStreams(remoteStreams)),
    setScreenSharingStream: (stream) => dispatch(setScreenSharingStream(stream)),
  };
};
