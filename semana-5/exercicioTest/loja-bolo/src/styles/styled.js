import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    grid-template-columns:250px 1fr;
    `


export const Botaonav = styled.div`
    justify-content: space-between;
    align-items: center;

`
export const Header = styled.header`
    background-color: mediumvioletred;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    grid-column: 1 / -1;
`
export const IconeTexto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-top: 10px;
`
export const Img = styled.img`
max-width: 40px;`

export const Nav = styled.nav`
    background-color: #f2d0e0;
    display: inline;
`
export const Footer = styled.footer`
    background-color: midnightblue;
    text-align: center;
    padding: 10px;
    color: white;
    grid-column: 1 / -1;
`
export const Button = styled.button`
width: 100px;
padding: 10px;
background: #ff6650;
border-radius: 5px;
cursor: pointer;
background-size: cover;`

export const ProdutoGrid = styled.div`
   display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 2px 2px black;
    text-align: center;
    max-width: 50%;

`
export const P = styled.h3`
text-align: center;`

export const ImgProduto = styled.img`
    max-width: 90%;  
    margin-top: 5px;
`
export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin: 10px auto;
    max-width: 98%;`
export const Div = styled.div`
   display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 2px 2px blanchedalmond;
    text-align: center;
    max-width: 98%;
`