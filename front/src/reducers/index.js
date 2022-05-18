import { combineReducers } from "redux";
import display from './display.js';
import admin from './admin.js'
import register from "./register.js";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persist = {
    key:'user',
    storage,
    whitelist:['user'],
};

const rootReducer = combineReducers({
    display,
    admin,
    register
});

export default persistReducer(persist, rootReducer);