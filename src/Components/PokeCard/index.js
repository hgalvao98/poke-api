import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/usersActions';

export default function PokeCard(props) {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const name = props.pokemon.name

    const fetchUser = dispatch(getUser(name))

    console.log(fetchUser);

    useEffect(() => {

    }, [dispatch, name])

    const pokemon = state.poke.pokemon
    console.log(pokemon)

    return (
        <div>
            {/* <img src={pokemon.sprites?.other['official-artwork'].front_default} /> */}
            <p>{name}</p>
        </div>
    )
}
