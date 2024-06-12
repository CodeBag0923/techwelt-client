import { SWITCH_MENU_VISIBLE, SWITCH_SIDEBAR_VISIBLE, TOGGLE_MAP_MODE } from "../store/types";

const initialState = {
  showMenu: false,
  showSidebar: false,
  mapMode: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_MENU_VISIBLE:
      return {
        ...state,
        showMenu: action.payload
      };

    case SWITCH_SIDEBAR_VISIBLE:
      return {
        ...state,
        showSidebar: action.payload
      };

    case TOGGLE_MAP_MODE:
      return {
        ...state,
        mapMode: action.payload
      };

    default:
      return state;
  }
}
