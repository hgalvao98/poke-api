import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PokeCard(props) {
    const name = props.pokemon.name

    return (
        <div>
            <p>{name}</p>
            <Link to={`/pokemon/${name}`}>View Pokemon</Link>
        </div>
    )
}
