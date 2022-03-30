import { GET_USER } from "../types"

const initialState = {
    pokemon: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                pokemon: action.payload,
            }
        default: return state
    }
}
