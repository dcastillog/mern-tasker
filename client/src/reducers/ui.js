import { OPEN_DRAWER, CLOSE_DRAWER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        isOpenDrawer: true,
      };
    case CLOSE_DRAWER:
      return {
        isOpenDrawer: false,
      };
    default:
      return state;
  }
};
