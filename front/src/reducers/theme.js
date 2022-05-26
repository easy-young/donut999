import { createAction } from "redux-actions";

const initialState = {
    protein: {
        result: [],
    },
    photo: {
        result: []
    },
    unique: {
        result: []
    },
    parking: {
        result: []
    },
    metadata: {
        loading: false,
        error: null
    }
};


const protein_REQUEST = 'PROTEIN/REQUEST'
const protein_SUCCESS = 'PROTEIN/SUCCESS'
const protein_FAILURE = 'PROTEIN/FAILURE'

export const protein_request = createAction(protein_REQUEST);
export const protein_success = createAction(protein_SUCCESS);
export const protein_failure = createAction(protein_FAILURE);

const THEME_PHOTO = {
    REQUEST: 'THEME/PHOTO_REQUEST',
    SUCCESS: 'THEME/PHOTO_SUCCESS',
    FAILURE: 'THEME/PHOTO_FAILURE'
};

const THEME_UNIQUE = {
    REQUEST: 'THEME/UNIQUE_REQUEST',
    SUCCESS: 'THEME/UNIQUE_SUCCESS',
    FAILURE: 'THEME/UNIQUE_FAILURE'
};

const THEME_PARKING = {
    REQUEST: 'THEME/PARKING_REQUEST',
    SUCCESS: 'THEME/PARKING_SUCCESS',
    FAILURE: 'THEME/PARKING_FAILURE'
};


export const theme_photo_request = createAction(THEME_PHOTO.REQUEST, payload => payload);
export const theme_photo_success = createAction(THEME_PHOTO.SUCCESS, payload => payload);
export const theme_photo_failure = createAction(THEME_PHOTO.FAILURE, payload => payload);

export const theme_unique_request = createAction(THEME_UNIQUE.REQUEST, payload => payload);
export const theme_unique_success = createAction(THEME_UNIQUE.SUCCESS, payload => payload);
export const theme_unique_failure = createAction(THEME_UNIQUE.FAILURE, payload => payload);

export const theme_parking_request = createAction(THEME_PARKING.REQUEST, payload => payload);
export const theme_parking_success = createAction(THEME_PARKING.SUCCESS, payload => payload);
export const theme_parking_failure = createAction(THEME_PARKING.FAILURE, payload => payload);

const theme = (state = initialState, action) => {
    switch (action.type) {
        /*  protein  */
        case protein_REQUEST:
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading: true,
                    error: null
                }
            }
        case protein_SUCCESS:
            const newList = [...action.payload]
            return {
                ...state,
                protein: {
                    ...state.protein,
                    result : [...newList]
                },
                metadata: {
                    loading: false,
                    error: null
                }
            }
        case protein_FAILURE:
            return {
                ...state,
            }
        /*  photo  */
        case THEME_PHOTO.REQUEST:
            return {
                ...state,
            }
        case THEME_PHOTO.SUCCESS:
            return {
                ...state,
            }
        case THEME_PHOTO.FAILURE:
            return {
                ...state,
            }

        case THEME_UNIQUE.REQUEST:
            return {
                ...state,
            }
        case THEME_UNIQUE.SUCCESS:
            return {
                ...state,
            }
        case THEME_UNIQUE.FAILURE:
            return {
                ...state,
            }

        case THEME_PARKING.REQUEST:
            return {
                ...state,
            }
        case THEME_PARKING.SUCCESS:
            return {
                ...state,
            }
        case THEME_PARKING.FAILURE:
            return {
                ...state,
            }

        default:
            return {
                ...state,
            }
    }
};

export default theme;