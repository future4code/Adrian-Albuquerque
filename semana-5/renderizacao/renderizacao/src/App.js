import React from 'react';
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Etapa1 from './components/etapa1/Etapa1';

function App() {

  return (
    <div className="App">
      <MainContainer>

        <Etapa1 />


      </MainContainer>

      <GlobalStyle />
    </div>
  );
}

export default App;
