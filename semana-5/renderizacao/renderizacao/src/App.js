import React from 'react';
import { MainContainer } from './styles/styled'
import GlobalStyle from './styles/global'
import Etapa1 from './components/etapa1/Etapa1';
import Etapa2 from './components/etapa2/Etapa2'
import Etapa3 from './components/etapa3/Etapa3'
export default class App extends React.Component {

  state = {
    pagina: ""
  }

    render() {
      return (
        <div className="App">
          <MainContainer>
            <h1>Formulário</h1>
            <button>Iniciar</button>
          </MainContainer>

          <GlobalStyle />
        </div>
      )
    }
  
}
