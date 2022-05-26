import { createAction } from "redux-actions";

const initialState = {
    protein: {
        result: null,
        error: null
    },
    photo: {
        result: null,
        error: null
    },
    unique: {
        result: null,
        error: null
    },
    parking: {
        result: null,
        error: null
    }
};

const THEME_PROTEIN = {
    REQUEST: 'THEME/PROTEIN_REQUEST',
    SUCCESS: 'THEME/PROTEIN_SUCCESS',
    FAILURE: 'THEME/PROTEIN_FAILURE'
};

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

export const theme_protein_request = createAction(THEME_PROTEIN.REQUEST);
export const theme_protein_success = createAction(THEME_PROTEIN.SUCCESS);
export const theme_protein_failure = createAction(THEME_PROTEIN.FAILURE);

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
        case THEME_PROTEIN.REQUEST:
            return {
                ...state,
            }
        case THEME_PROTEIN.SUCCESS:
            return {
                ...state,
                protein: {
                    ...state.protein,
                    result : [...action.payload]
                }
            }
        case THEME_PROTEIN.FAILURE:
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