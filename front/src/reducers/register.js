import { createAction } from "redux-actions";

const initialState = {
    submit: null,
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
            }
        case REGISTER.FAILURE:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
};

export default register;