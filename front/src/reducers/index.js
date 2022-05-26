import { combineReducers } from "redux";
import display from './display.js';
import shop from './shop.js';
import rank from './rank.js';
// import review from './review.js';
import admin from './admin/admin.js';
import adminStore from './admin/adminStore.js';
import adminEditStore from "./admin/editStore.js";
import adminDeleteStore from "./admin/deleteStore.js";
import adminBlack from './admin/adminBlack.js';
import adminNewBlack from './admin/adminNewBlack.js';
import adminDelBlack from "./admin/adminDelBlack.js";
import adminBlackReview from "./admin/adminBlackReview.js";
import adminReview from './admin/adminReview.js';
import adminDelReview from "./admin/adminDelReview.js";
import adminConfirm from './admin/adminStoreConfirm.js';
import adminDelRegi from './admin/adminStConDel.js';
import confirmSet from './admin/confirmSet';
import confirmStore from './admin/confirmStore';
import confirmDel from './admin/confirmDel';
import adminSearch from "./admin/search.js";

import register from "./register.js";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user.js'
import review from './review.js'
import createReview from "./writeReview.js";
import station from "./station.js";

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
    rank,
    shop,
    review,
    display,
    admin,
    adminStore,
    adminEditStore,
    adminDeleteStore,
    adminBlack,
    adminNewBlack,
    adminDelBlack,
    adminBlackReview,
    adminReview,
    adminDelReview,
    adminConfirm,
    confirmStore,
    adminDelRegi,
    confirmSet,
    confirmDel,
    adminSearch,
    register,
    route_map,
    user,
    review,
    createReview,
    station
});

export default persistReducer(persist, rootReducer);