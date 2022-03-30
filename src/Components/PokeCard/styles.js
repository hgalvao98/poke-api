import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Main = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:90%;
    margin:0 auto;
    padding:0 2em;
    background-color:#FFDE00;
    border-radius:25px;
    border:3px solid #3B4CCA;
    box-shadow: 0px 3px 10px rgba(0,0,0,0.5);
    :not(:last-child){
        margin-bottom:10px;
        
    }
    font-size:1.1em;
    font-weight:700;
    transition:transform 0.1s;
    :hover{
        transform:scale(1.01)
    }
`
export const MyLink = styled(Link)`
    color:black;
    font-weight:400;
    text-decoration:none;
    :hover{
        text-shadow:0px 3px 10px rgba(0,0,0,0.5);
    }
`