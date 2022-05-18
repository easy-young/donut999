import {all, fork} from 'redux-saga/effects';
// import watchCounterUp from './counterSaga';
import userSaga from './userSaga';
import adminSaga from './adminSaga';

export default function* rootSaga() {
    yield all([
        // fork(watchCounterUp),
        userSaga(),
        adminSaga()
    ]);
}