import store from 'src/store/store';
import { setLocalStream } from 'src/store/actions/room.actions';

const onlyAudioConstraints = {
  audio: true,
  video: false,
};

const defaultConstraints = {
  audio: true,
  video: true,
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
