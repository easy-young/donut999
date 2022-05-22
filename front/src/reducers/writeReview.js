import { Action } from "history"
import { createAction, handleActions } from "redux-actions"

const initialState = { 
    number: { flavor: null, atmosphere : null, cheap: null, service: null }, 
    email: null, text: null, metadata: { loading: false, error: null}
}

/* score list */
const review_FLAVOR = `REVIEW/FLAVOR`
const review_ATMOSPHERE = `REVIEW/ATMOSPHERE`
const review_CHEAP = `REVIEW/CHEAP`
const review_SERVICE = `REVIEW/SERVICE`

export const review_flavor = createAction(review_FLAVOR)
export const review_atmosphere = createAction(review_ATMOSPHERE)
export const review_cheap = createAction(review_CHEAP)
export const review_service = createAction(review_SERVICE)

/* review 제출 */
const review_create_REQUEST = 'REVIEW_CREATE/REQUEST'
const review_create_SUCCESS = 'REVIEW_CREATE/RSUCCESS'
const review_create_FAILURE = 'REVIEW_CREATE/FAILURE'
const review_WRITE = 'REVIEW_WRITE/DOWN'

export const review_create_request = createAction(review_create_REQUEST)
export const review_create_success = createAction(review_create_SUCCESS)
export const review_create_failure = createAction(review_create_FAILURE)
export const review_write = createAction(review_WRITE)


/*  reducer */

const createReview = (state = initialState, action) => {
    switch (action.type) {
        /* 각 항목 점수 변경 */
        case review_FLAVOR : 
            return {
                ...state,
                number : {
                    ...state.number,
                    flavor: action.payload.flavor
                }
            }
        case review_ATMOSPHERE : 
            return {
                ...state,
                number : {
                    ...state.number,
                    atmosphere: action.payload.atmosphere
                }
            }
        case review_CHEAP : 
            return {
                    ...state,
                    number : {
                        ...state.number,
                        cheap: action.payload.cheap
                    }
                }
        case review_SERVICE: 
            return {
                ...state,
                number : {
                    ...state.number,
                    service: action.payload.service
                }
            }
        /*  리뷰 내용 작성, 제출 */
        case review_WRITE :
            return {
                ...state,
                text : action.payload
            }
        case review_create_REQUEST :
            return {
                ...state,
                number : { ...state.number},
                text : action.payload.text,
                email: action.payload.email,
                metadata : {
                    ...state.metadata,
                    loading: true,
                    error: null
                }
            }
        case review_create_SUCCESS :
            return {
                ...state,
                number : {
                    ...state.number,
                },
                metadata : {
                    ...state.metadata,
                    loading: false,
                    error: null
                }
            }
        case review_create_FAILURE :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading: false,
                    error: true
                }
            }   
        default :
            return state
    }
}

export default createReview