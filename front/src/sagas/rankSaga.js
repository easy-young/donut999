import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { rank_flavor_request, rank_flavor_success, rank_flavor_failure, 
    rank_atmosphere_request, rank_atmosphere_success, rank_atmosphere_failure,
    rank_cheap_request, rank_cheap_success, rank_cheap_failure,
    rank_service_request, rank_service_success, rank_service_failure } from "../reducers/rank";

async function flavorAPI(action) {
    const result = await axios.post('http://localhost:4000/rank/flavor', action);
    return result;
}

async function atmosphereAPI(action) {
    const result = await axios.post('http://localhost:4000/rank/atmosphere', action);
    return result;
}

async function cheapAPI(action) {
    const result = await axios.post('http://localhost:4000/rank/cheap', action);
    return result;
}

async function serviceAPI(action) {
    const result = await axios.post('http://localhost:4000/rank/service', action);
    return result;
}

function* flavor(action) {
    try {
        const result = yield call(flavorAPI, action);
        yield put({
            type: rank_flavor_success.toString(),
            payload: result.data
        });
    } catch (e) {
        yield put({
            type: rank_flavor_failure.toString(),
            payload: e.response.data
        });
    }
}

function* atmosphere(action) {
    try {
        const result = yield call(atmosphereAPI, action);
        yield put({
            type: rank_atmosphere_success.toString(),
            payload: result.data
        });
    } catch (e) {
        yield put({
            type: rank_atmosphere_failure.toString(),
            payload: e.response.data
        });
    }
}

function* cheap(action) {
    try {
        const result = yield call(cheapAPI, action);
        yield put({
            type: rank_cheap_success.toString(),
            payload: result.data
        });
    } catch (e) {
        yield put({
            type: rank_cheap_failure.toString(),
            payload: e.response.data
        });
    }
}

function* service(action) {
    try {
        const result = yield call(serviceAPI, action);
        yield put({
            type: rank_service_success.toString(),
            payload: result.data
        });
    } catch (e) {
        yield put({
            type: rank_service_failure.toString(),
            payload: e.response.data
        });
    }
}

export default function* rankSaga() {
    yield takeLatest(rank_flavor_request.toString(), flavor);
    yield takeLatest(rank_atmosphere_request.toString(), atmosphere);
    yield takeLatest(rank_cheap_request.toString(), cheap);
    yield takeLatest(rank_service_request.toString(), service);
}