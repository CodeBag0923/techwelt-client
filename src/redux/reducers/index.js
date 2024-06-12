import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";
import authReducer from "./authReducer";
import globalReducer from "./globalReducer";

export default combineReducers({
    devicesList: deviceReducer,
    auth: authReducer,
    global: globalReducer,
});
