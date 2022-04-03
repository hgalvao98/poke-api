import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styles'
import pokeapi from '../../assets/imgs/pokeapi.png'

export default function index() {
    return (
        <Header>
            <Link to={'/'}><img src={pokeapi} alt='Pokemon logo' /></Link>
            <Link to={'/favorites'}><p>Favorites</p></Link>
        </Header>
    )
}
