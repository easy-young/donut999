import { createAction } from "redux-actions";

const initialState = {
    //
};

const REVIEW_CREATE = {
    REQUEST: "REVIEW_REQUEST",
    SUCCESS: "REVIEW_SUCCESS",
    FAILURE: "REVIEW_FAILURE"
};

export const review_create_request = createAction(REVIEW_CREATE.REQUEST, payload => payload);
export const review_create_success = createAction(REVIEW_CREATE.SUCCESS, payload => payload);
export const review_create_failure = createAction(REVIEW_CREATE.FAILURE, payload => payload);

const review = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_CREATE.REQUEST:
            return {
                ...state,
            }
        case REVIEW_CREATE.SUCCESS:
            return {
                ...state,
            }
        case REVIEW_CREATE.FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
};

export default review;