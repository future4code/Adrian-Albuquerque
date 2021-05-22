import React from 'react'
import GlobalStyle from './Styles/Global'
import { Main } from './Styles/Styled'
import AstroDev from './img/astrodev.png'
import ExitIcon from './img/exit.svg'
import axios from 'axios'
import AstroFy from './img/astrofy.png'
import Home from './Components/Home/Home'
import MusicList from './Components/MusicList/MusicList'
import Biblioteca from './Components/Biblioteca/Biblioteca'
const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const HeaderDefault = {
  headers: {
    Authorization: "adrian-americo-paiva"
  }
};

class App extends React.Component {

  state = {
    display: 'Home',
    listOfPlaylists: [],
    userPlaylists: [],
    idBeforePlaylist: [],
    musicOnPlaylist: [],
    idPlaylist: '',
    userHeader: ''
  }
  componentDidMount() {
    this.GetPlayLists();
  }

  //Get de Playlists Recomendadas
  GetPlayLists = async () => {
    const res = await axios.get(BASE_URL, HeaderDefault)
    try {
      this.setState({ listOfPlaylists: res.data.result.list, idBeforePlaylist: res.data.result.list })
      this.putId()
    }
    catch {
      console.log('ERROR')
    }
  }

  getUserPlaylists = async () => {
    const res = await axios.get(BASE_URL, this.state.userHeader)
    try {
      this.setState({ userPlaylists: res.data })
    }
    catch {
      alert("Ocorreu um erro ao carregar sua playlist")
    }
  }





  //Onclicks do menu lateral
  onCLickInicio = () => {
    this.setState({ display: 'Home' })
  }

  onCLickBiblioteca = () => {
    console.log("Biblioteca")
    this.setState({ display: 'Biblioteca' })
  }
  onClickPlayLists = () => {
    this.setState({ display: 'Baroes' })
  }

  //Get de musicas na playlist
  GetMusic = async (id) => {
    const URL_GET = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const res = await axios.get(URL_GET, HeaderDefault)
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

    // Map de Playlists
    const PlayLists = this.state.listOfPlaylists.map((play) => {
      return (<>
        <h2 key={play.id} onClick={this.onClickPlayLists}>{play.name}</h2>
      </>
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
          <img src={AstroFy} alt="" className="astro-img" />
          <h3>AstroFy</h3>
          <h2 onClick={this.onCLickInicio}>Inicio</h2>
          <h2 onClick={this.onCLickBiblioteca}>Sua Biblioteca</h2>
          <br />
          <h3>Playlists Recomendadas</h3>
          {PlayLists}
        </div>
        <main>
          <section className="songs-section">
            
            {
              this.state.display === 'Home' &&
              <Home />
            }
            {
              this.state.display === 'Baroes' &&
              <MusicList SongsOnPlaylist={SongsOnPlaylist} />
            }
            {
              this.state.display === 'Biblioteca' &&
              <Biblioteca />
            }

          </section>

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
