import { createAction } from "redux-actions";

const initialState = {
    result: null,
    error: null
};

const REGISTER = {
    REQUEST: 'REGISTER_REQUEST',
    SUCCESS: 'REGISTER_SUCCESS',
    FAILURE: 'REGISTER_FAILURE',
};

export const register_request = createAction(REGISTER.REQUEST, payload => payload);
export const register_success = createAction(REGISTER.SUCCESS, payload => payload);
export const register_failure = createAction(REGISTER.FAILURE, payload => payload);

const register = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER.REQUEST:
            return {
                ...state,
            }
        case REGISTER.SUCCESS:
            return {
                ...state,
                result: true
            }
        case REGISTER.FAILURE:
            return {
                ...state,
                result: null,
                error: action.payload
            }
        default:
            return {
                ...state,
            }
    }
};

export default register;