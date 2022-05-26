import axios from 'axios';
import {takeLatest,call,put} from 'redux-saga/effects';
import { admin_search_request, admin_search_success, admin_search_failure} from '../../reducers/admin/search.js';


async function searchAPI({payload}){
    console.log('searchApi', payload)
    try{
        const result = await axios.post(`http://localhost:4000/dt/admin/menu/search/black`,payload)
        return result
    }catch(e){
        console.log(e)
    }
}



function* search(action){
    console.log('search suc', action.payload)
    try{
        const result = yield call(searchAPI,action)
        yield put({
            type:admin_search_success.toString(),payload:result.data.result
        })
    }catch(e){
        yield put({
            type:admin_search_failure.toString(),payload:e.response
        })
       
    }
}


export default function* searchSaga(){
    yield takeLatest(admin_search_request.toString(),search)
}