import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import adminSaga from './adminSaga';
import registerSaga from './registerSaga';
import reviewSaga from './reviewSaga.js'

export default function* rootSaga() {

    yield all([
        adminSaga(),
        registerSaga(),
        reviewSaga()
    ]);
    
}