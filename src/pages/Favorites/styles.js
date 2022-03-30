import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    button{
        background-color: #C60000;
        outline:none;
        border:none;
        padding: 1em 2em;
        color:white;
        border-radius:25px;
        :hover{
            cursor: pointer;
            opacity:70%;
        }
    }
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

export const SubHeader = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`