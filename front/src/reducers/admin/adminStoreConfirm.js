import { createAction } from "redux-actions";


const initialState = {
    register:[],
}

const ADMIN_STORE_CONFIRM = {
    REQUEST:'ADMIN/STORE_CONFIRM_REQUEST',
    SUCCESS:'ADMIN/STORE_CONFIRM_SUCCESS',
    FAILURE:'ADMIN/STORE_CONFIRM_FAILURE',
}

export const admin_store_confirm_request = createAction(ADMIN_STORE_CONFIRM.REQUEST) 
export const admin_store_confirm_success = createAction(ADMIN_STORE_CONFIRM.SUCCESS)
export const admin_store_confirm_failure = createAction(ADMIN_STORE_CONFIRM.FAILURE)

const ADMIN_CONFIRM_DEL = {
    REQUEST:'ADMIN/CONFIRM_DEL_REQUEST',
    SUCCESS:'ADMIN/CONFIRM_DEL_SUCCESS',
    FAILURE:'ADMIN/CONFIRM_DEL_FAILURE',
}

export const admin_confirm_del_request = createAction(ADMIN_CONFIRM_DEL.REQUEST) 
export const admin_confirm_del_success = createAction(ADMIN_CONFIRM_DEL.SUCCESS)
export const admin_confirm_del_failure = createAction(ADMIN_CONFIRM_DEL.FAILURE)




const adminConfirm = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_STORE_CONFIRM.REQUEST:
            return {
                ...state,
            }
        case ADMIN_STORE_CONFIRM.SUCCESS:
            console.log('확인',action.payload)
            return {
                ...state,
               register:action.payload
            }
        case ADMIN_STORE_CONFIRM.FAILURE:
            return {
                ...state
            }
        case ADMIN_CONFIRM_DEL.REQUEST:
            console.log('reducer req',action.payload)
            return {
                ...state,
            }
        case ADMIN_CONFIRM_DEL.SUCCESS:
            console.log('reducer suc',action.payload)
            const idx = action.payload.idx
            return {
                ...state,
                register:action.payload
            }
        case ADMIN_CONFIRM_DEL.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminConfirm