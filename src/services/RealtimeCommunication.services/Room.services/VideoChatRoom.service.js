import store from '../../../store/store';
import { setOpenRoom } from '../../../store/actions/room.actions';

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
};
