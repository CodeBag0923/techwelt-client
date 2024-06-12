import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import rootReducer from "../reducers";

const persistConfig = {
    key: 'root',
    storage: storage,
}
const initalState = {};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
