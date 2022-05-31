import { createAction } from "redux-actions";

const initialState = {
    name:null,
    station:null,
    line:null,
    address:null,
    parking:null,
    protein:null,
    photo:null,
    special:null,
    operhour:null,
    website:null,
    menu:null,
    beverage:null,
    tel:null,
    intro:null,

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
                name:action.payload[0].name,
                station:action.payload[0].station,
                line:action.payload[0].line,
                address:action.payload[0].address,
                parking:action.payload[0].parking,
                protein:action.payload[0].protein,
                photo:action.payload[0].photo,
                special:action.payload[0].special,
                operhour:action.payload[0].operhour,
                website:action.payload[0].website,
                menu:action.payload[0].menu,
                beverage:action.payload[0].beverage,
                tel:action.payload[0].tel,
                intro:action.payload[0].intro,
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