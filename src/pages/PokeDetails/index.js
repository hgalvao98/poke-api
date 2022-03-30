import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import { addFavorites, getUser } from '../../store/actions/usersActions'
import { Body, Main, PokemonImage, PokemonInfo, MyButton } from './styles'
import Header from '../../Components/Header'

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

    return (
        <Main>
            <Header />
            <Body>
                <PokemonImage>
                    <img src={pokemon.sprites?.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
                </PokemonImage>
                <PokemonInfo>
                    <h1>{pokemon.name}</h1>
                    <h3>Abilities</h3>
                    {pokemon.abilities && pokemon.abilities.map((ability) => {
                        return (
                            <p>{ability.ability.name}</p>
                        )
                    })}
                    <MyButton onClick={() => addToFavorites()}>Add to Favorites</MyButton>
                </PokemonInfo>
            </Body>
        </Main>
    )
}
