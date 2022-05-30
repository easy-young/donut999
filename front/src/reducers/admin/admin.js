import { createAction } from "redux-actions";


const initialState = {
   store:[]

}

const ADMIN_STORE = {
    REQUEST:'ADMIN/STORE_REQUEST',
    SUCCESS:'ADMIN/STORE_SUCCESS',
    FAILURE:'ADMIN/STORE_FAILURE',
}

export const admin_store_request = createAction(ADMIN_STORE.REQUEST)
export const admin_store_success = createAction(ADMIN_STORE.SUCCESS)
export const admin_store_failure = createAction(ADMIN_STORE.FAILURE)

const ADMIN_STORE_EDIT = {
    REQUEST:'ADMIN/STORE_EDIT_REQUEST',
    SUCCESS:'ADMIN/STORE_EDIT_SUCCESS',
    FAILURE:'ADMIN/STORE_EDIT_FAILURE',
}

export const admin_store_edit_request = createAction(ADMIN_STORE_EDIT.REQUEST) 
export const admin_store_edit_success = createAction(ADMIN_STORE_EDIT.SUCCESS)
export const admin_store_edit_failure = createAction(ADMIN_STORE_EDIT.FAILURE)

const admin = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_STORE.REQUEST:
            return {
                ...state,
            }
        case ADMIN_STORE.SUCCESS:
            return {
                ...state,
                store:action.payload.result
            }
        case ADMIN_STORE.FAILURE:
            return {
                ...state
            }
        case ADMIN_STORE_EDIT.REQUEST:
            return {
                ...state,
            }
        case ADMIN_STORE_EDIT.SUCCESS:
            console.log('reducer',action)
            return {
                ...state,
                store:action.payload
            }
        case ADMIN_STORE_EDIT.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default admin