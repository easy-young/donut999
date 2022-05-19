import { combineReducers } from "redux";
import display from './display.js';
import admin from './admin/admin.js';
import adminStore from './admin/adminStore.js';
import register from "./register.js";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import route_map from "./routemap.js";

const persist = {
    key:'user',
    storage,
    whitelist:['user'],
};

const rootReducer = combineReducers({
    display,
    admin,
    adminStore,
    register,
    route_map
});

export default persistReducer(persist, rootReducer);