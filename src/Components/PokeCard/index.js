import React, { useEffect, useState } from 'react'
import { Main, MyLink, Image } from './styles'
import axios from 'axios'

export default function PokeCard(props) {
    const name = props.pokemon.name
    const url = props.pokemon.url
    const [color, setColor] = useState()
    const pokeImage = `https://projectpokemon.org/images/normal-sprite/${name || props.pokemon}.gif`
    const pokeColor = color && color.types[0].type.name
    let styleClass = `${pokeColor}`;
    let pokeIndex;

    if (!!url) {
        pokeIndex = url.split('/')[url.split('/').length - 2]
    } else {
        pokeIndex = '8'
    }

    const getColor = (index) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(res => setColor(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getColor(pokeIndex)
    }, [])


    return (
        <Main className={styleClass}>
            <Image>
                <img src={pokeImage} alt={`${name}`} />
            </Image>
            <p>{name || props.pokemon}</p>
            <MyLink to={`/pokemon/${name || props.pokemon}`}>View Pokemon</MyLink>
        </Main>
    )
}
