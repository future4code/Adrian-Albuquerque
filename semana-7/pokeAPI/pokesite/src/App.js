import React from 'react';
import axios from 'axios';
import GlobalStyle from './styles/global'
import { MainContainer } from './styles/styles';

export default class App extends React.Component {

  state = {
    allPokemon: []
  }
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    try {

      this.setState({ allPokemon: response.data.results })
    } catch {
      console.log("Ocorreu um erro, tente novamente mais tarde")
    }
  };

  render() {
    return (
      <MainContainer>

        <h1>Pokedex</h1>




        <GlobalStyle />
      </MainContainer>
    );
  }
}
