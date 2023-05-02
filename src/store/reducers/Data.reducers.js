import { SET_DATA } from "../actions/Data.actions";

export default function (state, action) {
    switch (action.type) {
        case SET_DATA:
        return {
            ...state,
            dataQuery: action.dataQuery
        };
        default: 
            return state;
    }
}