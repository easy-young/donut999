import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { station_request, station_success, station_failure } from "../reducers/station";

async function stationAPI(action) {
    const result = await axios.post('http://localhost:4000/station/info', action);
    console.log('result', result);
    return result;
}

function* station(action) {
    try {
        const result = yield call(stationAPI, action);
        if (result.data.length === 0) throw new Error('해당 역에 도넛 맛집 없음');
        yield put({
            type: station_success.toString(),
            payload: result.data
        });
    } catch (e) {
        yield put({
            type: station_failure.toString(),
            payload: null
        });
    }
}

export default function* stationSaga() {
    yield takeLatest(station_request.toString(), station);
}