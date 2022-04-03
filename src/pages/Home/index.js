import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/usersActions'
import PokeCard from '../../Components/PokeCard'
import { Main, Footer, MyTablePagination, Form } from './styles'
import Header from '../../Components/Header'
import { MyList } from '../../Components/List/styles'
import { TextField } from '@mui/material'

export default function Home() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [page, setPage] = useState(0);
    const [name, setName] = useState('')
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [showPoke, setShowPoke] = useState([])
    const pokemons = state.users.users.results


    const handleChange = (event, value) => {
        setPage(value)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleInput = (e) => {
        const value = e.target.value
        setName(value)
        filterPokemon(value)
    }

    const filterPokemon = (userSearch) => {
        const allPokemon = [...pokemons];
        setShowPoke(allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(userSearch.toLowerCase())
        ),
        );
    };

    const condition = () => {
        if (name === '') {
            return pokemons
        } else {
            return showPoke
        }
    }

    useEffect(() => {
        dispatch(getUsers(page, rowsPerPage))
    }, [page, rowsPerPage])

    return (
        <Main>
            <Header />
            <Form>
                <TextField id="outlined-basic" placeholder="Search" variant="outlined" onChange={handleInput} type='text' value={name}></TextField>
            </Form>

            {condition() ? <MyList children={condition().map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon} />)} /> : <p>Loading...</p>}

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
        </Main >
    )
}
