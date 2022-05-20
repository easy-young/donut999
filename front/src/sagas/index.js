import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from '././admin/adminSaga';
import adminStoreSaga from './admin/adminStoreSaga'
import adminStoreUpSaga from './admin/adminStoreUpSaga'
import registerSaga from './registerSaga';
import reviewSaga from './reviewSaga.js'

export default function* rootSaga() {

    yield all([
        // userSaga(),
        adminSaga(),
        adminStoreSaga(),
        adminStoreUpSaga(),
        registerSaga(),
        reviewSaga()
    ]);
    
}