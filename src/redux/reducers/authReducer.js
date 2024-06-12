import { SET_USER, LOG_OUT, USER_ERROR } from "../store/types";

const initialState = {
  user:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  isAuthenticated: !!localStorage.getItem("token"),
  loading: false,
  token: localStorage.getItem("token"),
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        token: action.payload.token,
        error: null,
      };

    case LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null,
        error: null,
      };

    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
