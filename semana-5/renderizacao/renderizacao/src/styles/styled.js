import styled from 'styled-components'

export const MainContainer = styled.div`
width: 100%;
max-height: 100%;
`
export const PrimeiraEtapa = styled.div`
display: flex;
width: 360px;
border-radius: 20px;
margin: 0 auto;
flex-direction: column;
background-color: white;
box-shadow: 1px 1px 1px 1px black;

h1 {
text-transform: uppercase;
margin: 8px auto;

}
h2 {
    text-align: center;
    padding: 10px;
}

input, select {
    padding: 5px;
    width: 95%;
    margin: 0 auto;
    border-radius: 5px;
}



button {
    width: 25%;
    margin: 5px auto;
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

    span {
        line-height: 2;
    }
}


`

