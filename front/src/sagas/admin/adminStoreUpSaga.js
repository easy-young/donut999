import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_edit_store_request, admin_edit_store_success, admin_edit_store_failure} from '../../reducers/admin/editStore.js';

async function editStoreAPI({payload}){
    console.log('api',payload)
    const idx = payload.store_id
    console.log(idx)
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/setting/update/`+idx,payload)
        console.log(result.data)
        return result
    }catch(e){
        console.log(e)
    }
}



function* editStore(action){
    console.log('edit action',action.payload)
    try{
        const result = yield call(editStoreAPI,action)
        // console.log('action',action.payload)
        console.log('su',result)
        yield put({
            type:admin_edit_store_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_edit_store_failure.toString(),payload:e.response
        })
       
    }
}

export default function* adminStoreUpSaga(){
    yield takeLatest(admin_edit_store_request.toString(),editStore)
}