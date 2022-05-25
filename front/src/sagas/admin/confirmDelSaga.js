import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_confirm_del_request, admin_confirm_del_success, admin_confirm_del_failure} from '../../reducers/admin/confirmDel.js';

async function confirmDelAPI({payload}){
    console.log('api',payload)
    const idx = payload.payload
    console.log('sagaidx',idx)
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/store/confirm/delregi/`+idx,payload)
        console.log(result.data)
        return result
    }catch(e){
        console.log(e)
    }
}



function* confirmDel(action){
    console.log('confirmSet',action.payload)
    try{
        const result = yield call(confirmDelAPI,action)
        console.log('su',result)
        yield put({
            type:admin_confirm_del_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_confirm_del_failure.toString(),payload:e.response
        })
       
    }
}

export default function* confirmDelSaga(){
    yield takeLatest(admin_confirm_del_request.toString(),confirmDel)
}