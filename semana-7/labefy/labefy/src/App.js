import React from 'react'
import GlobalStyle from './Styles/Global'
import { Main } from './Styles/Styled'
import AstroDev from './img/astrodev.png'
import ExitIcon from './img/exit.svg'
import axios from 'axios'
import AstroFy from './img/astrofy.png'
const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const Header = {
  headers: {
    Authorization: "adrian-americo-paiva"
  }
};

class App extends React.Component {

  state = {
    display: 'Home',
    listOfPlaylists: [],
    idBeforePlaylist: [],
    musicOnPlaylist: [],
    idPlaylist: ''
  }
  componentDidMount() {
    this.GetPlayLists();
  }

  //Get de todas as Playlists
  GetPlayLists = async () => {
    const res = await axios.get(BASE_URL, Header)
    try {
      this.setState({ listOfPlaylists: res.data.result.list, idBeforePlaylist: res.data.result.list })
      this.putId()
    }
    catch {
      console.log('ERROR')
    }
  }

  //Get de musicas na playlist
  GetMusic = async (id) => {
    const URL_GET = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const res = await axios.get(URL_GET, Header)
    try {
      this.setState({ musicOnPlaylist: res.data.result.tracks })
    }
    catch {
      console.log('error')
    }
  }

  putId = () => {
    console.log(this.state.idBeforePlaylist)
    this.state.idBeforePlaylist.map((idPlay => {
      return this.GetMusic(idPlay.id)
    }))
  }

  render() {

    const paginaAtual = () => {
      if (this.state.display !== "Home") {
        console.log("Home")
      }
    }

    // Map de Playlists
    const PlayLists = this.state.listOfPlaylists.map((play) => {
      return (
        <li key={play.id}>{play.name}</li>
      )
    })

    // Map de Musicas
    const SongsOnPlaylist = this.state.musicOnPlaylist.map((song) => {
      return (
        <div key={song.id} className="div-in-map">
          <section className="left-section">
            <img src="https://studiosol-a.akamaihd.net/tb/160x160/palcomp3-logo/e/5/f/3/4db3ad13bb8a43a19ed3a1e269e93352.jpg" alt="" />
            <div className="text-align">
              <li>Artista: {song.artist}</li>
              <li>nome da musica:{song.name}</li>
            </div>

          </section>
          <audio src={song.url} controls />
        </div>
      )
    })

    //Map de musicas
    return (
      <Main>
        <header>
          <div className="user-info">
            <div className="user-info-left_side">
              <img src={AstroDev} alt="Astrodev" />
              <h3>Astrodev</h3>
            </div>

            <img src={ExitIcon} alt="Sair" />
          </div>

        </header>

        <div className="left-side">
          {/* LOGOTIPO */}
          <img src={AstroFy} alt="" className="astro-img" />
          <h3>AstroFy</h3>
          {/* INSERIR ICONES AO LADO DE CADA BOTÃO */}
          <h2>Inicio</h2>
          <h2>Buscar</h2>
          <br />
          <h2>Playlists</h2>
          {PlayLists}
        </div>
        <main>
          <section className="songs-section">
            {SongsOnPlaylist}
          </section>
          {/* {paginaAtual} */}
        </main>
        <footer>
          <h1>Oi, eu sou um footer !</h1>
        </footer>
        <GlobalStyle />
      </Main>
    );
  }
}

export default App;
