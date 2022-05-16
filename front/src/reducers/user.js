import { createAction, handleActions } from "redux-actions";

const initialState = {
    me:{
        id: null,
        email: null,
        nickname: null,
        provider: null,
    },
    isLogin: false,
    error: null,
    loading: false,
};

const USER_LOGIN = {
    REQUEST:'USER/LOGIN_REQUEST',
    SUCCESS:'USER/LOGIN_SUCCESS',
    FAILURE:'USER/LOGIN_FAILURE'
};

export const user_login_request = createAction(USER_LOGIN.REQUEST);
export const user_login_success = createAction(USER_LOGIN.SUCCESS);
export const user_login_failure = createAction(USER_LOGIN.FAILURE);

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN.REQUEST:
            return {
                ...state,
                loading: true,
                isLogin: false,
                error: null,
            };
        case USER_LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                isLogin: true,
                me: {
                    ...action.payload.user,
                },
                error: null,
            };
        case USER_LOGIN.FAILURE:
            return {
                ...state,
                loading: false,
                isLogin: false,
                error: action
            };
        default:
            return state;
    }
};

export default user;