import React, { useState, useEffect } from 'react';
import GlobalStyle from './global';
import axios from 'axios';
import PokeCard from './Components/PokeCard/PokeCard'

function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    axios.get(URL)
      .then(res => {
        setPokeList(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  
  return (
    <div>
      <PokeCard pokeList={pokeList} pokeName={pokeName} changePokeName={changePokeName} />
      <GlobalStyle />
    </div>
  );
}

export default App;
