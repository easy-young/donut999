import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_confirm_store_request, admin_confirm_store_success, admin_confirm_store_failure} from '../../reducers/admin/confirmStore';

async function confirmStoreAPI({payload}){
    // console.log('api',payload)
    const idx = payload.regi_id

    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/confirm/addstore/`+idx,payload)
        // console.log(result.data)
        return result
    }catch(e){
        console.log(e)
    }
}



function* confirmStore(action){
    // console.log('confirmSet',action.payload)
    try{
        const result = yield call(confirmStoreAPI,action)
        // console.log('su',result)
        yield put({
            type:admin_confirm_store_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_confirm_store_failure.toString(),payload:e.response
        })
       
    }
}

export default function* confirmStoreSaga(){
    yield takeLatest(admin_confirm_store_request.toString(),confirmStore)
}