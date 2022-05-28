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

const THEME_PROTEIN = {
    REQUEST: 'THEME/PROTEIN_REQUEST',
    SUCCESS: 'THEME/PROTEIN_SUCCESS',
    FAILURE: 'THEME/PROTEIN_FAILURE'
}

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

export const protein_request = createAction(THEME_PROTEIN, payload => payload);
export const protein_success = createAction(THEME_PROTEIN, payload => payload);
export const protein_failure = createAction(THEME_PROTEIN, payload => payload);

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
        case THEME_PROTEIN.REQUEST: case THEME_PHOTO.REQUEST: case THEME_UNIQUE: case THEME_PARKING:
            return {
                ...state,
                metadata : {
                    ...state.metadata,
                    loading: true,
                    error: null
                }
            }
        case THEME_PROTEIN.SUCCESS:
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
        case THEME_PROTEIN.FAILURE: case THEME_PHOTO.FAILURE: case THEME_UNIQUE.FAILURE: case THEME_PARKING.FAILURE:
            return {
                ...state,
            }
        case THEME_PHOTO.SUCCESS:
            return {
                ...state,
            }
        case THEME_UNIQUE.SUCCESS:
            return {
                ...state,
            }
        case THEME_PARKING.SUCCESS:
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