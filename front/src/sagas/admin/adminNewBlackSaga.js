import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import {admin_new_black_request,admin_new_black_success,admin_new_black_failure} from '../../reducers/admin/adminNewBlack';


async function newBlackAPI({payload}){
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/user/setting/addblack`,payload)
        console.log('newblack',result)
        return result
    }catch(e){
        console.log(e)
    }
}


function* newBlack(action){
    console.log('new black action',action.payload)
    try{
        const result = yield call(newBlackAPI,action)
        console.log('new su',result)
        yield put({
            type:admin_new_black_success.toString(),payload:result.data.result
        })

    }catch(e){
        yield put({
            type:admin_new_black_failure.toString(),payload:e.response
        })
       
    }
}

export default function* adminNewBlackSaga(){
    yield takeLatest(admin_new_black_request.toString(),newBlack)
}