import { createAction } from "redux-actions";


const initialState = {
    register:null,
}

const ADMIN_STORE_CONFIRM = {
    REQUEST:'ADMIN/STORE_CONFIRM_REQUEST',
    SUCCESS:'ADMIN/STORE_CONFIRM_SUCCESS',
    FAILURE:'ADMIN/STORE_CONFIRM_FAILURE',
}

export const admin_store_confirm_request = createAction(ADMIN_STORE_CONFIRM.REQUEST) 
export const admin_store_confirm_success = createAction(ADMIN_STORE_CONFIRM.SUCCESS)
export const admin_store_confirm_failure = createAction(ADMIN_STORE_CONFIRM.FAILURE)





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
        
        default:
            return state;
    }
}


export default adminConfirm