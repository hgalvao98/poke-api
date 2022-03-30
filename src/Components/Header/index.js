import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './styles'

export default function index() {
    return (
        <Header>
            <Link to={'/'}><h1>Home</h1></Link>
            <Link to={'/favorites'}><p>Favorites</p></Link>
        </Header>
    )
}
