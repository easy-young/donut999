import { createAction } from "redux-actions";


const initialState = {
    idx:null

}

const ADMIN_DEL_REVIEW = {
    REQUEST:'ADMIN/DEL_REVIEW_REQUEST',
    SUCCESS:'ADMIN/DEL_REVIEW_SUCCESS',
    FAILURE:'ADMIN/DEL_REVIEW_FAILURE',
}

export const admin_del_review_request = createAction(ADMIN_DEL_REVIEW.REQUEST) 
export const admin_del_review_success = createAction(ADMIN_DEL_REVIEW.SUCCESS)
export const admin_del_review_failure = createAction(ADMIN_DEL_REVIEW.FAILURE)


const adminDelReview = (state=initialState,action) => {
  
    switch(action.type){
        case ADMIN_DEL_REVIEW.REQUEST:
            return {
                ...state,
            }
        case ADMIN_DEL_REVIEW.SUCCESS:
            return {
                ...state,
                idx:action.payload
            }
        case ADMIN_DEL_REVIEW.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}



export default adminDelReview