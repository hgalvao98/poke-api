import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Main = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:90%;
    margin:0 auto;
    padding:0 2em 2em 2em;
    border-radius:25px;
    border:3px solid #3B4CCA;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.5);
    margin-bottom:10px;
    font-size:1.1em;
    font-weight:700;
    transition:transform 0.1s;
    :hover{
        transform:scale(1.01)
    }
    img{
        height:70px;
        width:70px;
    }
`
export const MyLink = styled(Link)`
    color:black;
    font-weight:400;
    text-decoration:none;
    margin-top:2px;
    :hover{
        font-weight:700;
        letter-spacing:2px;
    }
`

export const Image = styled.div`
    background-color:white;
    padding:1em 2em;
    margin:1em 0;
    border-radius:25px;
    
`