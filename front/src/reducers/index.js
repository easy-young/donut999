import { combineReducers } from "redux";
// import { createAction, handleActions } from 'redux-actions';
// import counter from './counter.js';
import user from './user.js';
import display from './display.js';
import admin from './admin.js'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persist = {
    key:'user',
    storage,
    whitelist:['user'],
};

const rootReducer = combineReducers({
    display,admin, user
});

export default persistReducer(persist, rootReducer);