import { createAction } from "redux-actions";


const initialState = {
   review:null

}

const ADMIN_REVIEW = {
    REQUEST:'ADMIN/REVIEW_REQUEST',
    SUCCESS:'ADMIN/REVIEW_SUCCESS',
    FAILURE:'ADMIN/REVIEW_FAILURE',
}

export const admin_review_request = createAction(ADMIN_REVIEW.REQUEST)
export const admin_review_success = createAction(ADMIN_REVIEW.SUCCESS)
export const admin_review_failure = createAction(ADMIN_REVIEW.FAILURE)


const adminReview = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_REVIEW.REQUEST:
            return {
                ...state,
            }
        case ADMIN_REVIEW.SUCCESS:
            return {
                ...state,
                review:action.payload
            }
        case ADMIN_REVIEW.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminReview