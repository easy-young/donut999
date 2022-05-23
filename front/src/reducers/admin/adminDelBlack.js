import { createAction } from "redux-actions";


const initialState = {
    display:true

}

const ADMIN_DEL_BLACK = {
    REQUEST:'ADMIN/DEL_BLACK_REQUEST',
    SUCCESS:'ADMIN/DEL_BLACK_SUCCESS',
    FAILURE:'ADMIN/DEL_BLACK_FAILURE',
}

export const admin_del_black_request = createAction(ADMIN_DEL_BLACK.REQUEST) 
export const admin_del_black_success = createAction(ADMIN_DEL_BLACK.SUCCESS)
export const admin_del_black_failure = createAction(ADMIN_DEL_BLACK.FAILURE)


const adminDelBlack = (state=initialState,action) => {
  
    switch(action.type){
        case ADMIN_DEL_BLACK.REQUEST:
            return {
                ...state,
            }
        case ADMIN_DEL_BLACK.SUCCESS:
            return {
                ...state,
                display:false
            }
        case ADMIN_DEL_BLACK.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}



export default adminDelBlack