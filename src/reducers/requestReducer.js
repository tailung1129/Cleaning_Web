import { GET_REQUEST } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState , action) {
    switch (action.type) {
        case GET_REQUEST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}