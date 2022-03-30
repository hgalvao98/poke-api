import { ADD_FAVORITE, RESET_FAVORITE } from "../types"

const initialState = {
    favorites: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case RESET_FAVORITE:
            return initialState
        default:
            return state
    }
}
