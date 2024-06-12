import { getResponse, signInUser } from "../../services/axios";
import {
  GET_DEVICES,
  DEVICES_ERROR,
  GET_USERTOKEN,
  GET_TOKENERROR,
  LOG_OUT,
} from "../store/types";

export const getDevices = (props) => async (dispatch) => {
  try {
    var response = await getResponse("/api/vehicles/show", "post", props);
    if (response.status === 401) {
      dispatch({
        type: LOG_OUT,
      });
    }
    if (response.status === 200) {
      dispatch({
        type: GET_DEVICES,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: DEVICES_ERROR,
      payload: error,
    });
  }
};

export const getToken = (props) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERTOKEN,
      payload: await signInUser(props),
    });
  } catch (error) {
    dispatch({
      type: GET_TOKENERROR,
      payload: error,
    });
  }
};
