import { TablePagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../../store/actions/usersActions'
import PokeCard from '../../Components/PokeCard'
import { Main, Footer, MyTablePagination, List } from './styles'
import Header from '../../Components/Header'

export default function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [color, setColor] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChange = (event, value) => {
        setPage(value)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const pokemons = state.users.users.results


    useEffect(() => {
        dispatch(getUsers(page, rowsPerPage))
    }, [page, rowsPerPage])



    return (
        <Main>
            <Header />
            <input placeholder='Search for pokemon'></input>
            <button>Search</button>
            <List>
                {pokemons && pokemons.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon} />)}
            </List>
            <Footer>
                <MyTablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChange}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage='Pokemons per page'
                />
            </Footer>
        </Main>
    )
}
