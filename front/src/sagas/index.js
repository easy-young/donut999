import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import adminStoreDelSaga from './admin/adminStoreDelSaga';
import adminBlackSaga from './admin/adminBlackSaga';
import adminNewBlackSaga from './admin/adminNewBlackSaga';
import adminDelBlackSaga from './admin/adminDelBlackSaga';
import adminBlackReviewSaga from './admin/adminBlackReviewSaga';
import adminReviewSaga from './admin/adminReviewSaga';
import adminDelReviewSaga from './admin/adminDelReviewSaga';
import adminConfirmSaga from './admin/adminStoreConfirmSaga';
import confirmSetSaga from './admin/confirmSetSaga';
import confirmStoreSaga from './admin/confirmStoreSaga';
import confirmDelSaga from './admin/confirmDelSaga';

import registerSaga from './registerSaga';
import stationSaga from './stationSaga';
import shopSaga from './shopSaga';
import rankSaga from './rankSaga';

/*  review CRUD  */
import getStoreSaga from './review/getStoreSaga';
import reviewSaga from './reviewSaga.js'
import createReviewSaga from './review/createReviewSaga.js';
import deleteReviewSaga from './review/deleteReviewSaga.js'
import updateReviewSaga from './review/updateReviewSaga.js'

import themeSaga from './themeSaga.js';


export default function* rootSaga() {

    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        adminStoreDelSaga(),
        adminBlackSaga(),
        adminNewBlackSaga(),
        adminDelBlackSaga(),
        adminBlackReviewSaga(),
        adminReviewSaga(),
        adminDelReviewSaga(),
        adminConfirmSaga(),
        confirmSetSaga(),
        confirmStoreSaga(),
        confirmDelSaga(),

        registerSaga(),

        getStoreSaga(),
        reviewSaga(),
        createReviewSaga(),
        deleteReviewSaga(),
        updateReviewSaga(),
        stationSaga(),
        shopSaga(),
<<<<<<< HEAD

=======
        rankSaga(),
>>>>>>> 5d0484e35e99d6a771859b16f44932045dc17f93
        themeSaga()
    ]);
    
}