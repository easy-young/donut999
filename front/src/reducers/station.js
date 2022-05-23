import { createAction } from "redux-actions";

const initialState = {
    name: null,
    store: []
};

const STATION = {
    REQUEST: "STATION_REQUEST",
    SUCCESS: "STATION_SUCCESS",
    FAILURE: "STATION_FAILURE",
    EXIT: "STATION_EXIT"
};

export const station_request = createAction(STATION.REQUEST, payload => payload);
export const station_success = createAction(STATION.SUCCESS, payload => payload);
export const station_failure = createAction(STATION.FAILURE, payload => payload);
export const station_exit = createAction(STATION.EXIT);

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
        case STATION.EXIT:
            return {
                ...state,
                name: false,
            }
        default:
            return {
                ...state,
            };
    }
};

export default station;