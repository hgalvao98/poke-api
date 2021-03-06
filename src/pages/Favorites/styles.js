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

export const SubHeader = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`
