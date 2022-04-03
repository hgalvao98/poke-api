import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { MyList } from '../../Components/List/styles'
import PokeCard from '../../Components/PokeCard'
import { resetFavorites } from '../../store/actions/usersActions'
import { Main, SubHeader } from './styles'

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

    return (
        <Main>
            <Header />
            <SubHeader>
                <h1>Your favorite Pokemons</h1>
            </SubHeader>
            {state.length >= 1 ? <MyList children={mapFavorites} /> : <p className='warning'>There are no pokemons on your favorite list!</p>}
            <button onClick={() => resetFav()}>Reset</button>
        </Main>
    )
}
