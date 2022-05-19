import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_store_edit_request, admin_store_edit_success, admin_store_edit_failure} from '../../reducers/admin/adminStore.js';

async function adminStoreAPI(payload){
    try{
        const result = await axios.post('http://localhost:4000/dt/admin/menu/store/setting/:store_id',null)
        
        console.log(result)
        return result
    }catch(e){
        console.log(e)
    }
}

function* admin(action){
    try{
        const result = yield call(adminStoreAPI,action)
        yield put({
            type:admin_store_edit_success.toString(),payload:result.data
        })
    }catch(e){
        yield put({
            type:admin_store_edit_failure.toString(),payload:e.response.data
        })
       
    }
}

export default function* adminSaga(){
    yield takeLatest(admin_store_edit_request.toString(),admin)
}