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

const ADMIN_EDIT_STORE = {
    REQUEST:'ADMIN/EDIT_STORE_REQUEST',
    SUCCESS:'ADMIN/EDIT_STORE_SUCCESS',
    FAILURE:'ADMIN/EDIT_STORE_FAILURE',
}

export const admin_edit_store_request = createAction(ADMIN_EDIT_STORE.REQUEST) 
export const admin_edit_store_success = createAction(ADMIN_EDIT_STORE.SUCCESS)
export const admin_edit_store_failure = createAction(ADMIN_EDIT_STORE.FAILURE)





const adminEditStore = (state=initialState,action) => {
    switch(action.type){
        case ADMIN_EDIT_STORE.REQUEST:
            return {
                ...state,
            }
        case ADMIN_EDIT_STORE.SUCCESS:
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
        case ADMIN_EDIT_STORE.FAILURE:
            return {
                ...state
            }
        
        default:
            return state;
    }
}


export default adminEditStore