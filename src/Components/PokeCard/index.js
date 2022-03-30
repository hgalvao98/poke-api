import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Main, MyLink, Image } from './styles'

export default function PokeCard(props) {
    const name = props.pokemon.name
    // const url = props.pokemon.url
    const pokeImage = `https://projectpokemon.org/images/normal-sprite/${name || props.pokemon}.gif`


    return (
        <Main>
            <Image>
                <img src={pokeImage} alt={`${name}`} />
            </Image>
            <p>{name || props.pokemon}</p>
            <MyLink to={`/pokemon/${name || props.pokemo}`}>View Pokemon</MyLink>
        </Main>
    )
}
