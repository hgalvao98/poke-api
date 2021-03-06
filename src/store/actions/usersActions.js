import { ADD_FAVORITE, GET_USER, GET_USERS, RESET_FAVORITE, USERS_ERROR, USER_ERROR } from '../types'
import axios from 'axios'

export const getUsers = (page, rowsPerPage) => async dispatch => {

    const perPage = rowsPerPage;
    const offset = page * rowsPerPage

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch (e) {
        dispatch({
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}

export const getUser = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: USER_ERROR,
            payload: console.log(e)
        })
    }
}

export const addFavorites = (pokemon) => {
    return {
        type: ADD_FAVORITE,
        payload: pokemon
    }
}

export const resetFavorites = () => {
    return {
        type: RESET_FAVORITE,
    }

}