import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_black_request, admin_black_success, admin_black_failure} from '../../reducers/admin/adminBlack.js';

async function blackAPI({payload}){
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/user/setting`,null)
        console.log('black',result)
        return result
    }catch(e){
        console.log(e)
    }
}



function* black(action){
    console.log('black action',action.payload)
    try{
        const result = yield call(blackAPI,action)
        console.log('su',result)
        yield put({
            type:admin_black_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_black_failure.toString(),payload:e.response
        })
       
    }
}


export default function* adminBlackSaga(){
    yield takeLatest(admin_black_request.toString(),black)
}