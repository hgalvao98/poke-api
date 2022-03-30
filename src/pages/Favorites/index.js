import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import PokeCard from '../../Components/PokeCard'
import { resetFavorites } from '../../store/actions/usersActions'
import { Header, Main, SubHeader, List } from './styles'

export default function Favorites() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.fav.favorites)

    const mapFavorites =
        state && state.map((favorites) => {
            return (
                <PokeCard key={favorites} pokemon={favorites} />
            )
        })

    const resetFav = () => {
        dispatch(resetFavorites())
    }

    const Lists =
        <List>
            {mapFavorites}
        </List>

    return (
        <Main>
            <Header>
                <Link to={'/'}><h1>Home</h1></Link>
                <Link to={'/favorites'}><p>Favorites</p></Link>
            </Header>
            <SubHeader>
                <h1>Your favorite Pokemons</h1>
            </SubHeader>
            {state.length >= 1 ? Lists : <p className='warning'>There are no pokemons on your favorite list!</p>}
            <button onClick={() => resetFav()}>Reset</button>
        </Main>
    )
}
