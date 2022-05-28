import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_confirm_set_request, admin_confirm_set_success, admin_confirm_set_failure} from '../../reducers/admin/confirmSet.js';

async function confirmSetAPI({payload}){
    // console.log('api',payload)
    const idx = payload.payload
    // console.log('sagaidx',idx)
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/confirm/`+idx,payload)
        // console.log(result.data)
        return result
    }catch(e){
        console.log(e)
    }
}



function* confirmSet(action){
    // console.log('confirmSet',action.payload)
    try{
        const result = yield call(confirmSetAPI,action)
        // console.log('su',result)
        yield put({
            type:admin_confirm_set_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_confirm_set_failure.toString(),payload:e.response
        })
       
    }
}

export default function* confirmSetSaga(){
    yield takeLatest(admin_confirm_set_request.toString(),confirmSet)
}