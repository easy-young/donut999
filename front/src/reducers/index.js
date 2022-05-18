import { combineReducers } from "redux";
// import { createAction, handleActions } from 'redux-actions';
// import counter from './counter.js';
// import user from './user.js';
import display from './display.js';
import admin from './admin.js'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import route_map from "./routemap.js";

const persist = {
    key:'user',
    storage,
    whitelist:['user'],
};

const rootReducer = combineReducers({
    display,admin,route_map
});

export default persistReducer(persist, rootReducer);