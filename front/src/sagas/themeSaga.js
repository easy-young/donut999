import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { theme_protein_request, theme_protein_success, theme_protein_failure } from "../reducers/theme.js";
import { theme_photo_request, theme_photo_success, theme_photo_failure } from "../reducers/theme.js";
import { theme_unique_request, theme_unique_success, theme_unique_failure } from "../reducers/theme.js";
import { theme_parking_request, theme_parking_success, theme_parking_failure } from "../reducers/theme.js";

async function proteinAPI() {
    const result = await axios.post('http://localhost:4000/theme/protein', null);
    return result;
}

// async function photoAPI() {
//     const result = await axios.post('http://localhost:4000/theme/photo', null);
//     return result;
// }

// async function uniqueAPI() {
//     const result = await axios.post('http://localhost:4000/theme/unique', null);
//     return result;
// }

// async function parkingAPI() {
//     const result = await axios.post('http://localhost:4000/theme/parking', null);
//     return result;
// }

function* protein(action) {
    try {
        const result = yield call(proteinAPI, action);
        // console.log(result.data.result[0])
        yield put({
            type: theme_protein_success.toString(),
            payload: result.data.result[0]
        });
    } catch (e) {
        yield put({
            type: theme_protein_failure,
            payload: e.response.data
        });
    }
}

// function* photo(action) {
//     try {
//         const result = yield call(photoAPI, action);
//         yield put({
//             type: theme_photo_success,
//             paylaod: result
//         });
//     } catch (e) {
//         yield put({
//             type: theme_photo_failure,
//             paylaod: e.response.data
//         });
//     }
// }

// function* unique(action) {
//     try {
//         const result = yield call(uniqueAPI, action);
//         yield put({
//             type: theme_unique_success,
//             paylaod: result
//         });
//     } catch (e) {
//         yield put({
//             type: theme_unique_failure,
//             paylaod: e.response.data
//         });
//     }
// }

// function* parking(action) {
//     try {
//         const result = yield call(parkingAPI, action);
//         yield put({
//             type: theme_parking_success,
//             paylaod: result
//         });
//     } catch (e) {
//         yield put({
//             type: theme_parking_failure,
//             paylaod: e.response.data
//         });
//     }
// }

export default function* themeSaga() {
    yield takeLatest(theme_protein_request.toString(), protein);
    // yield takeLatest(theme_photo_request(), photo);
    // yield takeLatest(theme_unique_request(), unique);
    // yield takeLatest(theme_parking_request(), parking);
}