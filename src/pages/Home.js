import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PokeCard from '../Components/PokeCard'
import { getUser, getUsers } from '../store/actions/usersActions'

export default function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value)
    }

    // const incrementPage = () => {
    //     setPage(page + 1)
    // }

    // const decrementPage = () => {
    //     if (page > 1) {
    //         setPage(page - 1)
    //     }
    // }

    const pokemons = state.users.users.results


    useEffect(() => {
        dispatch(getUsers(page))
    }, [page])


    return (
        <div>
            <header>
                <h1>Home</h1>
                <Link to={'/favorites'}>Favorites</Link>
            </header>
            {pokemons && pokemons.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon} />)}
            <Pagination count={10} page={page} color="secondary" onChange={handleChange} />
        </div>
    )
}
