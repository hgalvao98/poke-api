import { combineReducers } from 'redux'
import favReducer from './favReducer'
import pokeReducer from './pokeReducer'
import userReducer from './userReducer'


export default combineReducers({
    users: userReducer,
    poke: pokeReducer,
    fav: favReducer
})