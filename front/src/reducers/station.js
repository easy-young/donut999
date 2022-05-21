import { createAction } from "redux-actions";

const initialState = {
    name: null,
    store: []
};

const STATION = {
    REQUEST: "STATION_REQUEST",
    SUCCESS: "STATION_SUCCESS",
    FAILURE: "STATION_FAILURE"
};

export const station_request = createAction(STATION.REQUEST, payload => payload);
export const station_success = createAction(STATION.SUCCESS, payload => payload);
export const station_failure = createAction(STATION.FAILURE, payload => payload);

const station = (state = initialState, action) => {
    switch (action.type) {
        case STATION.REQUEST:
            return {
                ...state,
                name: action.payload
            };
        case STATION.SUCCESS:
            return {
                ...state,
                name: action.payload[0].stationKor,
                store: [
                    ...action.payload
                ]
            };
        case STATION.FAILURE:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default station;