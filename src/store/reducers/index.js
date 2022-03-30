import { combineReducers } from 'redux'
import pokeReducer from './pokeReducer'
import userReducer from './userReducer'


export default combineReducers({
    users: userReducer,
    poke: pokeReducer
})