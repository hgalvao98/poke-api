import { Button } from "@mui/material";
import styled from "styled-components";

export const Main = styled.div`
`


export const Header = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    padding:0 10em;
    align-items:center;
    justify-content:space-between;
    background-color:#3B4CCA;
    font-family: 'Pokemon Solid', sans-serif;
    p, h1{
        letter-spacing:5px;
        color:#FFDE00;
        text-shadow: 0 10px 20px #000, 0 0 20px #000;
    }
`

export const Body = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background-color:lightgray;
    width:80%;
    margin:2rem auto;
    border-radius:25px;
    border: 3px solid #3B4CCA;
`

export const PokemonInfo = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:2rem;
    font-family: 'Press Start 2P', cursive;
    h1{
        font-size:4em;
    }
    h3{
        font-size:2em;
    }
    text-align:center;
    button{

    }

`
export const PokemonImage = styled.div`
    background-color:white;
    margin:2rem;
    border-radius:25px;
    border: 3px solid black;
`

export const MyButton = styled(Button)`
    background-color:white !important;
    color:black !important;
    :hover{
        opacity:80%;
        transform:scale(1.03)
    }
`

