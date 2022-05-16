import {all, fork} from 'redux-saga/effects';
import watchCounterUp from './counterSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        // fork(watchCounterUp),
        // fork(userSaga),
    ]);
}