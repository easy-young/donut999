import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_store_request, admin_store_success, admin_store_failure} from '../reducers/admin'

async function adminAPI(payload){
    
    const result = await axios.post('http://localhost:4000/dt/admin/menu/store/setting',payload)
    console.log(result)
    
}

function* admin(action){
    try{
        const result = yield call(adminAPI,action.payload)
        yield put({
            type:admin_store_success.toString(),payload:result.data
        })
    }catch(e){
        yield put({
            type:admin_store_failure.toString(),payload:e.response.data
        })
       
    }
}

export default function* adminSaga(){
    yield takeLatest(admin_store_request.toString(),admin)
}