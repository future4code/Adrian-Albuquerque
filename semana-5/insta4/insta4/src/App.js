import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import LogoCs from './img/cslogo.jpg'
import Zero from './img/zero.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

class App extends React.Component {

  state = {
    publicacao: [{
      nomeUsuario: "Paulinha",
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      publicacao: "Daniel Ueno",
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: {LogoCs}
    },
  {
    publicacao: "Adrian Américo",
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost: {Zero}
  }]
  }

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post nomeUsuario={'Daniel Ueno'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={LogoCs} />

        <Post nomeUsuario={'Adrian Américo'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={Zero} />

        <Post nomeUsuario={'Lais Petra'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'} />
      </MainContainer >
    );
  }
}

export default App;

