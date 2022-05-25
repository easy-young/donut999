import { createAction } from "redux-actions";


const initialState = {
    display:true
}

const ADMIN_CONFIRM_DEL = {
    REQUEST:'ADMIN/CONFIRM_DEL_REQUEST',
    SUCCESS:'ADMIN/CONFIRM_DEL_SUCCESS',
    FAILURE:'ADMIN/CONFIRM_DEL_FAILURE',
}

export const admin_confirm_del_request = createAction(ADMIN_CONFIRM_DEL.REQUEST) 
export const admin_confirm_del_success = createAction(ADMIN_CONFIRM_DEL.SUCCESS)
export const admin_confirm_del_failure = createAction(ADMIN_CONFIRM_DEL.FAILURE)





const confirmDel = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_CONFIRM_DEL.REQUEST:
            console.log('reducer req',action.payload)
            return {
                ...state,
            }
        case ADMIN_CONFIRM_DEL.SUCCESS:
            console.log('reducer suc',action.payload)
            return {
                ...state,
                display:false
            }
        case ADMIN_CONFIRM_DEL.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default confirmDel