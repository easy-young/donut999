import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { review_update_failure, review_update_request, review_update_success } 
from '../../reducers/review.js';

const option = {
    'Content-type':'application/json',
    withCredentials:true
}

async function updateReviewAPI (action) {
    const data = {
        ...action.payload
    }
    try {
        const result = await axios.post('http://localhost:4000/review/updateReview', data , option )
        return result.data
    }
    catch(e) {
        console.log(e)
    }
}

function* updateDelete(action) {
    try {
        const result = yield call(updateReviewAPI, action)
        yield put({
            type:review_update_success.toString(), payload: result.result
        })
    }
    catch (e) {
        yield put ({
            type : review_update_failure.toString(), payload: e.response.data
        })
    }
}

export default function* updateReviewSaga() {
    yield takeLatest(review_update_request.toString(), updateDelete)
} 