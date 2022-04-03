import { TablePagination } from "@mui/material";
import styled from "styled-components";

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
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
export const Footer = styled.div`
    width:100vw;
    background-color:#3B4CCA;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    bottom: 0;
`
export const MyTablePagination = styled(TablePagination)` 
    p, button, div, svg{
        color:white;
    }
    @media (max-width: 768px){
        p, button, div, svg{
        color:white;
        font-size:10px;
    }
    }
`

export const Form = styled.form`
    margin:1em 0 0 0;
    input{
        margin-left:1em;
        height:1px;
        
    }
`
