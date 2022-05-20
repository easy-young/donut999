import { combineReducers } from "redux";
import display from './display.js';
import admin from './admin/admin.js';
import adminStore from './admin/adminStore.js';
import adminEditStore from "./admin/editStore.js";
import register from "./register.js";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user.js'

import route_map from "./routemap.js";

const persist = {
    key:'user',
    storage, // 저장 방법 
    whitelist:['user'], // localstorage 에 저장할 내용
};

// const persistKey = 'user'
// const storageState = localStorage.getItem(persistKey)
// localStorage.setItem(persistKey, JSON.stringify(storage ? JSON.parse(storageState) : user()))

const rootReducer = combineReducers({
    display,
    admin,
    adminStore,
    adminEditStore,
    register,
    route_map,
    user
});

export default persistReducer(persist, rootReducer);