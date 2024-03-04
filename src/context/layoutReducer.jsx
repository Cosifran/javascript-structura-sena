//import type
import { OPEN_DRAWER } from "../types";
export default (state, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return{
        ...state,
        openDrawer: action.payload
      }
    default:
      return state;
  }
};
