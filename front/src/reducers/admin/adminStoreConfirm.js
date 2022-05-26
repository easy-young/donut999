import { createAction } from "redux-actions";


const initialState = {
    register:[],
    sort:[],
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

const ADMIN_CONFIRM_STATE = {
    REQUEST:'ADMIN/CONFIRM_STATE_REQUEST',
    SUCCESS:'ADMIN/CONFIRM_STATE_SUCCESS',
    FAILURE:'ADMIN/CONFIRM_STATE_FAILURE',
}

export const admin_confirm_state_request = createAction(ADMIN_CONFIRM_STATE.REQUEST) 
export const admin_confirm_state_success = createAction(ADMIN_CONFIRM_STATE.SUCCESS)
export const admin_confirm_state_failure = createAction(ADMIN_CONFIRM_STATE.FAILURE)




const adminConfirm = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_STORE_CONFIRM.REQUEST:
            return {
                ...state,
            }
        case ADMIN_STORE_CONFIRM.SUCCESS:
            
            return {
                ...state,
               register:action.payload
            }
        case ADMIN_STORE_CONFIRM.FAILURE:
            return {
                ...state
            }
        case ADMIN_CONFIRM_DEL.REQUEST:
          
            return {
                ...state,
            }
        case ADMIN_CONFIRM_DEL.SUCCESS:
          
            return {
                ...state,
                register:action.payload
            }
        case ADMIN_CONFIRM_DEL.FAILURE:
            return {
                ...state
            }
        case ADMIN_CONFIRM_STATE.REQUEST:
        console.log('state req reducer', action.payload)
            return {
                ...state,
            }
        case ADMIN_CONFIRM_STATE.SUCCESS:
            console.log('state suc reducer', action)
            return {
                ...state,
                sort:action.payload
                
            }
        case ADMIN_CONFIRM_STATE.FAILURE:
        
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminConfirm