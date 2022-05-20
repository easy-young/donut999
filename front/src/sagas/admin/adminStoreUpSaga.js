import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_edit_store_request, admin_edit_store_success, admin_edit_store_failure} from '../../reducers/admin/editStore.js';

async function editStoreAPI({payload}){

    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/setting/update`+payload,null)
        console.log(result)
        return result
    }catch(e){
        console.log(e)
    }
}



function* editStore(action){
    console.log('action',action.payload)
    try{
        const result = yield call(editStoreAPI,action.payload)
        console.log(result)
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