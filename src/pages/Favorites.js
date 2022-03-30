import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { resetFavorites } from '../store/actions/usersActions'

export default function Favorites() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.fav.favorites)

    const mapFavorites =
        state && state.map((favorites) => {
            return (
                <p key={favorites}>
                    {favorites}
                </p>
            )
        })

    const resetFav = () => {
        dispatch(resetFavorites())
    }


    return (
        <div>
            <nav>
                <NavLink to={'/'}>
                    Home
                </NavLink>
            </nav>
            <h1>Favorites pokemons</h1>
            {state.length >= 1 ? mapFavorites : <p>There are no pokemons on your favorite list!</p>}
            <button onClick={() => resetFav()}>Reset</button>
        </div>
    )
}
