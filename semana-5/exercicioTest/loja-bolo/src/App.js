import './App.css';
import React from 'react';
import ProdutoGrid from './components/ProdutoGrid/ProdutoGrid'
import GlobalStyle from './styles/global'
import Bolo from './images/cake.png'
import BoloChocolate from './images/bolo-chocolate.jpg'
import Candy from './images/candy.png'
import Cart from './images/cart.png'
import Home from './images/home.png'
import Chevron from './images/chevron.png'
import IconUser from './images/icon-user.png'
import { Header, Container, IconeTexto, Img, Nav, Footer, Button, Main, P } from './styles/styled'

function App() {
  return (
    <Container>
      <Header>
        <IconeTexto>
          <Img src={Bolo} alt="cake" />
          <h2>Confeitaria</h2>
        </IconeTexto>
        <Button>Registrar</Button>
      </Header>
      <Nav>
        <IconeTexto>
          <Img src={Home} mensagem="Home" alt="Home" />
          <p>Home</p>
          <Img src={Chevron} />
        </IconeTexto>

        <IconeTexto>
          <Img src={Candy} mensagem="Home" alt="Home" />
          <p>Produtos</p>
          <Img src={Chevron} />
        </IconeTexto>

        <IconeTexto>
          <Img src={Cart} mensagem="Home" alt="Home" />
          <p>Carrinho</p>
          <Img src={Chevron} />
        </IconeTexto>

        <IconeTexto>
          <Img src={IconUser} mensagem="Home" alt="Home" />
          <p>Perfil</p>
          <Img src={Chevron} />
        </IconeTexto>

      </Nav>
      <Main>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>

        <ProdutoGrid produtoImagem={BoloChocolate} mensagem="Bolo de Chocolate" comentario="Delicioso bolo de chocolate"></ProdutoGrid>


      </Main>

      <Footer>
        <P>Oi, eu sou um footer !</P>
      </Footer>

      <GlobalStyle />
    </Container>
  );
}

export default App;
