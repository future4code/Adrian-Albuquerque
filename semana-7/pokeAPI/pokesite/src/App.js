import React from 'react';
import axios from 'axios';
import GlobalStyle from './styles/global'
import { MainContainer } from './styles/styles';
import Batman from './components/batman';
import BatIco from './components/batIco.png'

export default class App extends React.Component {

  state = {
    allPokemon: [],
    fotoPoke: '',
    tipoPoke: '',
    display: 'home'
  }
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    try {

      this.setState({ allPokemon: response.data.results })
      console.log(response.data)
    } catch {
      console.log("Ocorreu um erro, tente novamente mais tarde")
    }
  };
  getPicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`)
    this.setState({ fotoPoke: response.data.sprites.front_default })

  }
  render() {

    const pokeList = this.state.allPokemon.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>{poke.name}</option>
      )
    })
    const batFunction = () => {
      console.log("click")
      this.setState({ display: '' })
    }
    console.log(this.state.display)
    if (this.state.display === 'home') {

      return (
        <MainContainer>

          <div className="container-poke">
            <h1>Pokedex</h1>
            <select onChange={this.getPicture}>{pokeList}
              <option></option>
            </select>
            {this.state.fotoPoke && <>
              <img src={this.state.fotoPoke} alt="" />
              <div className="bat-click">

                <button onClick={batFunction}>
                  <img src={BatIco} alt="" />
                  <p>NÃO CLIQUE</p>
                </button>
              </div>
            </>
            }
          </div>

          <GlobalStyle />
        </MainContainer>




      );
    } else {
      return (
        <MainContainer>
          <Batman />
          <GlobalStyle />
        </MainContainer>
      )
    }
  }
}