import { combineReducers } from "redux";
import display from './display.js';
import admin from './admin.js'
import register from "./register.js";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user.js'

import route_map from "./routemap.js";

const persist = {
    key:'user',
    storage,
    whitelist:['user'],
};

const persistKey = 'user'
const storageState = localStorage.getItem(persistKey)
localStorage.setItem(persistKey, JSON.stringify(storage ? JSON.parse(storageState) : user()))

const rootReducer = combineReducers({
    display,
    admin,
    register,
    route_map,
    user
});

export default persistReducer(persist, rootReducer);