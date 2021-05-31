import styled from "styled-components";

export const MainContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr) ;
height: 100vh;
max-width: 100%;

.bat-click {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    button {
        display: flex;
        padding: 10px;
        align-items: center;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
    :hover {
        background-color: #242424;
        border-radius: 20px;
        padding: 5px;
    }
        p {
            border-bottom: 1px solid black;
        }

        img {
            width: 1rem;
        }
        
        
    }
}

.container-poke {
font-size: 2.6rem;
font-family: sans-serif;
color: #808000;
width: 500px;
height: 500px;
grid-row: 2;
grid-column: 2;
text-align: center;
display: flex;
flex-direction: column;
background-color: whitesmoke;
border-radius: 20px;
align-items: center;

img {
   width: 60%;

}
}

`
export const BatContainer = styled.div`
width: 100%;
grid-column: 1 / span 3;
grid-row: 1 / span 3;

img {
    width: 100%;
    height: 100%;
}
`