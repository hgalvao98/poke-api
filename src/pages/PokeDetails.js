import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { addFavorites, getUser } from '../store/actions/usersActions'

export default function PokeDetails() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.poke)
    const favorites = useSelector(state => state.fav.favorites)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUser(params.id))
    }, [dispatch])

    const pokemon = state.pokemon

    const addToFavorites = () => {
        for (let i = 0; i < favorites.length; i++) {
            if (params.id === favorites[i]) {
                console.log(favorites[i])
                return alert(`Pokemon ${params.id} already in favorites, try another one from our home page!`)
            }
        }
        dispatch(addFavorites(params.id))
        navigate('/favorites')
    }



    console.log(favorites)

    return (
        <div>
            <nav>
                <NavLink to={'/'}>
                    Home
                </NavLink>
            </nav>
            <div>
                <img src={pokemon.sprites?.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
                <h2>{pokemon.name}</h2>
                <h3>Abilities</h3>
                {pokemon.abilities && pokemon.abilities.map((ability) => {
                    return (
                        <p>{ability.ability.name}</p>
                    )
                })}
                <button onClick={() => addToFavorites()}>Add to Favorites</button>
            </div>
        </div>
    )
}
