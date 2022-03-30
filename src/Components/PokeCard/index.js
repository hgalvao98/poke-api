import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Main, MyLink } from './styles'

export default function PokeCard(props) {
    const name = props.pokemon.name

    return (
        <Main>
            <p>{name || props.pokemon}</p>
            <MyLink to={`/pokemon/${name || props.pokemo}`}>View Pokemon</MyLink>
        </Main>
    )
}
