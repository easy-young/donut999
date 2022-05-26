import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_confirm_state_request, admin_confirm_state_success, admin_confirm_state_failure} from '../../reducers/admin/adminStoreConfirm';

async function sortConfirmAPI(action){
    console.log('sortapi',action)
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/confirm/sort`,action)
        console.log(result)
        return result
    }catch(e){
        console.log(e)
    }
}



function* sortConfirm(action){
    console.log('sortConfirm',action)
    try{
        const result = yield call(sortConfirmAPI,action)
        console.log(result)
        yield put({
            type:admin_confirm_state_success.toString(),payload:result
        })

    }catch(e){
        yield put({
            type:admin_confirm_state_failure.toString(),payload:e.response
        })
       
    }
}

export default function* sortConfirmSaga(){
    yield takeLatest(admin_confirm_state_request.toString(),sortConfirm)
}