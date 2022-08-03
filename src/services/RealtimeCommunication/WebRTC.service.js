import Peer from 'simple-peer';
import store from 'src/store/store';
import { setLocalStream, setRemoteStreams } from 'src/store/room/room.actions';
import * as SocketConnectionService from './SocketConnection.service';

let peers = {};

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
};

export const getConfiguration = () => {
  const turnIceServers = null;
  if (turnIceServers) {
    // TODO: fetch TURN server credentials
  } else {
    console.warn('Using only STUN server.');
    return {
      iceServers: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunction) => {
  const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunction();
    })
    .catch((err) => {
      console.log(err);
      console.log('Cannot get access to local stream.');
    });
};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;
  console.log('isInitiator: ', isInitiator);
  if (isInitiator) {
    console.log('preparing new peer connection as initiator');
  } else {
    console.log('preparing new peer connection as NOT initiator');
  }
  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });
  peers[connUserSocketId].on('signal', (data) => {
    const signalData = {
      signal: data,
      connUserSocketId: connUserSocketId,
    };
    SocketConnectionService.signalPeerData(signalData);
  });
  peers[connUserSocketId].on('stream', (remoteStream) => {
    remoteStream.connUserSocketId = connUserSocketId;
    addNewRemoveStream(remoteStream);
  });
};

export const handleSignalingData = (data) => {
  const { connUserSocketId, signal } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
  }
};

export const addNewRemoveStream = (remoteStream) => {
  const remoteStreams = store.getState().room.remoteStreams;
  const newRemoteStreams = [...remoteStreams, remoteStream];
  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const closeAllConnections = () => {
  Object.entries(peers).forEach((mappedObject) => {
    const connUserSocketId = mappedObject[0];
    if (peers[connUserSocketId]) {
      peers[connUserSocketId].destroy();
      delete peers[connUserSocketId];
    }
  });
};

export const handleParticipantLeftRoom = (data) => {
  const { connUserSocketId } = data;
  if (peers[connUserSocketId]) {
    peers[connUserSocketId].destroy();
    delete peers[connUserSocketId];
  }
  // prettier-ignore
  const newRemoteStreams = store.getState().room.remoteStreams
    .filter((remoteStream) => remoteStream.connUserSocketId !== connUserSocketId);
  store.dispatch(setRemoteStreams(newRemoteStreams));
};

export const switchOutgoingTracks = (stream) => {
  console.log('switching outgoing tracks');
  for (let socket_id in peers) {
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        // prettier-ignore
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};
