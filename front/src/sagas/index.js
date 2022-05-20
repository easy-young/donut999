import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import registerSaga from './registerSaga';

/*  review CRUD  */
import reviewSaga from './reviewSaga.js'
import createReviewSaga from './review/createReviewSaga';




export default function* rootSaga() {

    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        registerSaga(),
        reviewSaga(),
        createReviewSaga()
    ]);
    
}