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

// const initialState = {
//     result: null,
//     error: null

// }

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
            console.log('reducer R ', action)
            return {
                ...state,
            }
        case ADMIN_EDIT_STORE.SUCCESS:
            console.log('reducer s ', action)
            return {
                ...state,
                name:action.payload.name,
                station:action.payload.station,
                line:action.payload.line,
                address:action.payload.address,
                parking:action.payload.parking,
                protein:action.payload.protein,
                photo:action.payload.photo,
                special:action.payload.special,
                operhour:action.payload.operhour,
                website:action.payload.website,
                menu:action.payload.menu,
                beverage:action.payload.beverage,
                tel:action.payload.tel,
                intro:action.payload.intro,

                // result:true
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