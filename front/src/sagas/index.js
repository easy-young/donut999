import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import adminStoreDelSaga from './admin/adminStoreDelSaga';
import adminBlackSaga from './admin/adminBlackSaga';
import adminNewBlackSaga from './admin/adminNewBlackSaga';
import registerSaga from './registerSaga';
import stationSaga from './stationSaga';

/*  review CRUD  */
import reviewSaga from './reviewSaga.js'
import createReviewSaga from './review/createReviewSaga';




export default function* rootSaga() {

    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        adminStoreDelSaga(),
        adminBlackSaga(),
        adminNewBlackSaga(),
        registerSaga(),
<<<<<<< HEAD
        reviewSaga(),
        createReviewSaga()
=======
        stationSaga()
>>>>>>> c2c90b70f6f28b8377f897b890374d57828b9c4f
    ]);
    
}