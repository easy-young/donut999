import { Action } from "history"
import { createAction, handleActions } from "redux-actions"

const initialState = { metadata : { loading : false, error : null }, 
    data: [], test:null}

        // {
        //     idx: null,
        //     email: null,
        //     flavor: null,
        //     atmosphere : null,
        //     cheap : null,
        //     service : null,
        //     text: null,
        //     metadata : {
        //         loading: false,
        //         error: null
        //     }
        // }

const review_REQUEST = 'REVIEW/REQUEST'
const review_SUCCESS = 'REVIEW/SUCCESS'
const review_FAILURE = 'REVIEW/FAILURE'

export const review_request = createAction(review_REQUEST)
export const review_success = createAction(review_SUCCESS)
export const review_failure = createAction(review_FAILURE)

const review = (state=initialState, action) => {
    switch (action.type) {
        case review_REQUEST :
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:true,
                    error: null
                }
            }
        case review_SUCCESS :
            return {
                ...initialState,
                data : [
                    ...state.data,
                    ...action.payload
                ],
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: null
                },
                test:'test'
            }
        case review_FAILURE :
            console.log('req failed')
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading:false,
                    error: true
                }
            }
        default :
            return state
    }
}

export default review;