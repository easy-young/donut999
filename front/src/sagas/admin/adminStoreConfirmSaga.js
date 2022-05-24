import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_store_confirm_request, admin_store_confirm_success, admin_store_confirm_failure} from '../../reducers/admin/adminStoreConfirm.js';

async function adminConfirmAPI(){
    try{
        const result = await axios.post('http://localhost:4000/dt/admin/menu/store/confirm',null)
        return result
    }catch(e){
        console.log(e)
    }
}

function* adminConfirm(action){
    try{
        const result = yield call(adminConfirmAPI,action.payload)
        yield put({
            type:admin_store_confirm_success.toString(),payload:result.data.result
        })
    }catch(e){
        yield put({
            type:admin_store_confirm_failure.toString(),payload:e.response.data
        })
       
    }
}

export default function* adminConfirmSaga(){
    yield takeLatest(admin_store_confirm_request.toString(),adminConfirm)
}