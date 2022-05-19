import { createAction } from "redux-actions";


const initialState = {
   name:null,
   station:null,
   line:null,
   address:null,
   parking:null,
   operhour:null,
   website:null,
   menu:null,
   beverage:null,
   tel:null,
   etc:null,
   intro:null

}

const ADMIN_STORE_EDIT = {
    REQUEST:'ADMIN/STORE_EDIT_REQUEST',
    SUCCESS:'ADMIN/STORE_EDIT_SUCCESS',
    FAILURE:'ADMIN/STORE_EDIT_FAILURE',
}

export const admin_store_edit_request = createAction(ADMIN_STORE_EDIT.REQUEST)
export const admin_store_edit_success = createAction(ADMIN_STORE_EDIT.SUCCESS)
export const admin_store_edit_failure = createAction(ADMIN_STORE_EDIT.FAILURE)


const adminStore = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_STORE_EDIT.REQUEST:
            return {
                ...state,
            }
        case ADMIN_STORE_EDIT.SUCCESS:
            return {
                ...state,
                name:action.payload.result.name,
                station:action.payload.result.station,
                line:action.payload.result.line,
                address:action.payload.result.address,
                parking:action.payload.result.parking,
                operhour:action.payload.result.operhour,
                website:action.payload.result.website,
                menu:action.payload.result.menu,
                beverage:action.payload.result.beverage,
                tel:action.payload.result.tel,
                etc:action.payload.result.guiter,
                intro:action.payload.result.intro
            }
        case ADMIN_STORE_EDIT.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminStore