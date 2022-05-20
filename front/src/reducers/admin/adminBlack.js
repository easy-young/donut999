import { createAction } from "redux-actions";


const initialState = {
    user:null

}

const ADMIN_BLACK = {
    REQUEST:'ADMIN/BLACK_REQUEST',
    SUCCESS:'ADMIN/BLACK_SUCCESS',
    FAILURE:'ADMIN/BLACK_FAILURE',
}

export const admin_black_request = createAction(ADMIN_BLACK.REQUEST) 
export const admin_black_success = createAction(ADMIN_BLACK.SUCCESS)
export const admin_black_failure = createAction(ADMIN_BLACK.FAILURE)


const adminBlack = (state=initialState,action) => {
  
    switch(action.type){
        case ADMIN_BLACK.REQUEST:
            return {
                ...state,
            }
        case ADMIN_BLACK.SUCCESS:
            return {
                ...state,
                user:action.payload
            }
        case ADMIN_BLACK.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}



export default adminBlack