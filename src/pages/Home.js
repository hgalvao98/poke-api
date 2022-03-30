import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokeCard from '../Components/PokeCard'
import { getUser, getUsers } from '../store/actions/usersActions'

export default function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [page, setPage] = useState(1);

    const incrementPage = () => {
        setPage(page + 1)
    }

    const decrementPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const pokemons = state.users.users.results


    useEffect(() => {
        dispatch(getUsers(page))
    }, [page])


    return (
        <div>
            <button onClick={() => incrementPage()}>+</button>
            <button onClick={() => decrementPage()}>-</button>
            {pokemons && pokemons.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon} />)}
        </div>
    )
}
