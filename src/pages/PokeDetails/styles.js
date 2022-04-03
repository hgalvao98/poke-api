import { Button } from "@mui/material";
import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
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
    @media (max-width: 768px) {
        flex-direction:column;
    }
`

export const PokemonInfo = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:2rem;
    font-family: 'Press Start 2P', cursive;
    h1{
        font-size:4rem;
    }
    h3{
        font-size:2em;
    }
    text-align:center;
    @media (max-width: 768px) {
        margin-bottom:8px;

        h1{
            font-size:30px;
        }
        h3{
            font-size:10px;
        }
        p{
            font-size:8px;
        }
    }
`
export const PokemonImage = styled.div`
    background-color:white;
    margin:2rem;
    border-radius:25px;
    border: 3px solid black;
    @media (max-width: 768px) {
        img{
            height:9rem;
            width:9rem
        }
    }
`

export const MyButton = styled(Button)`
    background-color:white !important;
    color:black !important;
    :hover{
        opacity:80%;
        transform:scale(1.03)
    }
    
`

