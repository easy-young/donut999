import { createAction } from "redux-actions";


const initialState = {
    search:null

}

const ADMIN_SEARCH = {
    REQUEST:'ADMIN/SEARCH_REQUEST',
    SUCCESS:'ADMIN/SEARCH_SUCCESS',
    FAILURE:'ADMIN/SEARCH_FAILURE',
}

export const admin_search_request = createAction(ADMIN_SEARCH.REQUEST) 
export const admin_search_success = createAction(ADMIN_SEARCH.SUCCESS)
export const admin_search_failure = createAction(ADMIN_SEARCH.FAILURE)


const adminSearch = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_SEARCH.REQUEST:
            console.log('sch req',action.payload)
            return {
                ...state,
            }
        case ADMIN_SEARCH.SUCCESS:
            console.log('sch suc',action.payload)
            return {
                ...state,
                search:action.payload
            }
        case ADMIN_SEARCH.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}



export default adminSearch