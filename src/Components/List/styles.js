import styled from 'styled-components'

export const MyList = styled.div`
    display:grid;
    grid-template-columns:repeat(5, auto);
    height:100%;
    width:80%;
    padding:1rem 0 0 0;
    @media (max-width: 768px) {
    grid-template-columns:auto;
    margin-bottom:100px;
  }
`
