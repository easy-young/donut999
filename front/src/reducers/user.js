import { createAction, handleActions } from "redux-actions";

const initialState = {
    me:{
        email: null,
        nickname: null,
    },
    isLogin: false,
    error: null,
    loading: false,
};

const USER_LOGIN = {
    REQUEST:'USER/LOGIN_REQUEST',
    SUCCESS:'USER/LOGIN_SUCCESS',
    FAILURE:'USER/LOGIN_FAILURE',
};

const USER_LOGOUT = {
    REQUEST:'USER/LOGOUT_REQUEST',
    SUCCESS:'USER/LOGOUT_SUCCESS',
    FAILURE:'USER/LOGOUT_FAILURE'
}

export const user_login_request = createAction(USER_LOGIN.REQUEST);
export const user_login_success = createAction(USER_LOGIN.SUCCESS);
export const user_login_failure = createAction(USER_LOGIN.FAILURE);

export const user_logout_request = createAction(USER_LOGOUT.REQUEST);
export const user_logout_success = createAction(USER_LOGOUT.SUCCESS);
export const user_logout_failure = createAction(USER_LOGOUT.FAILURE);

const user = (state = initialState, action) => {
    console.log(action, '<<< this')
    switch (action.type) {
        case USER_LOGIN.REQUEST:
            return {
                ...state,
                loading: true,
                isLogin: false,
                error: null,
            };
        case USER_LOGIN.SUCCESS:
            console.log('sdfsdf')
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
        case USER_LOGOUT.REQUEST:
            return {
                ...state,
                loading: true,
                isLogin: true,
                error: null,
            };
        case USER_LOGOUT.SUCCESS:
            return {
                ...state,
                loading: false,
                isLogin: false,
                me: {
                    email:null,
                    nickname:null,
                },
                error: null,
            };
        case USER_LOGOUT.FAILURE:
            return {
                ...state,
                loading: false,
                isLogin: true,
                error: action
            };
        default:
            return state;
    }
};

export default user;
