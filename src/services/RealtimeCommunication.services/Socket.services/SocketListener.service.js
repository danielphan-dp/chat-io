import { getSocketInstance } from './_state';

export const addListener = (eventName, callback) => {
  getSocketInstance().on(eventName, callback);
};
