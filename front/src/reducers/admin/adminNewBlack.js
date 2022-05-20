import { createAction } from "redux-actions";


const initialState = {
    email:null

}

const ADMIN_NEW_BLACK = {
    REQUEST:'ADMIN/NEW_BLACK_REQUEST',
    SUCCESS:'ADMIN/NEW_BLACK_SUCCESS',
    FAILURE:'ADMIN/NEW_BLACK_FAILURE',
}

export const admin_new_black_request = createAction(ADMIN_NEW_BLACK.REQUEST) 
export const admin_new_black_success = createAction(ADMIN_NEW_BLACK.SUCCESS)
export const admin_new_black_failure = createAction(ADMIN_NEW_BLACK.FAILURE)


const adminNewBlack = (state=initialState,action)=> {
    switch(action.type){
        case ADMIN_NEW_BLACK.REQUEST:
            return {
                ...state,
            }
        case ADMIN_NEW_BLACK.SUCCESS:
            return {
                ...state,
                email:action.payload
            }
        case ADMIN_NEW_BLACK.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminNewBlack