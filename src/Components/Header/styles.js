import styled from 'styled-components'

export const Header = styled.div`
    width:90%;
    display:flex;
    flex-direction:row;
    margin-top:10px;
    border:3px solid black;
    padding:0 10em;
    align-items:center;
    justify-content:space-between;
    background-color:#3B4CCA;
    font-family: 'Pokemon Solid', sans-serif;
    border-radius:25px;
    p, h1{
        letter-spacing:5px;
        color:#FFDE00;
        text-shadow: 0 10px 20px #000, 0 0 20px #000;
    }
    img{
        height:90px;
    }
    @media (max-width: 768px) {
        flex-direction:column;
    }
`