import React from 'react'
import GlobalStyle from './Styles/Global'
import { Main, Albums } from './Styles/Styled'
import AstroDev from './img/astrodev.png'
import ExitIcon from './img/exit.svg'
import axios from 'axios'
import SongLogo from './img/song-logo.png'
import AstroFy from './img/astrofy.png'
import MusicList from './Components/MusicList/MusicList'
import CriarPlaylist from './Components/CriarPlaylist/CriarPlaylist'
import LoginPage from './Components/Login/Login'
const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const HeaderDefault = {
  headers: {
    Authorization: "adrian-americo-paiva"
  }
};

class App extends React.Component {

  state = {
    display: 'Login',
    recommendedPlaylists: [],
    recommendedIdPlaylist: [],
    recommendedMusicOnPlaylist: [],
    userPlaylists: [],
    userIdPlaylist: '',
    usercreatePlaylistName: '',
    userHeader: '',
    userMusics: [],
    newPlaylistName: '',
    newPlaylistUrl: '',
    newPlaylistArtist: '',
    newPlaylistId: ''
  }
  componentDidMount() {
    this.GetPlayLists();
  }

  //Get de Playlists Recomendadas
  GetPlayLists = async () => {
    const res = await axios.get(BASE_URL, HeaderDefault)
    try {
      this.setState({ recommendedPlaylists: res.data.result.list, recommendedIdPlaylist: res.data.result.list })
      this.putId()
    }
    catch {
      console.log('ERROR')
    }
  }

  //Get de musicas recomendadas da playlist
  GetMusic = async (id) => {
    const URL_GET = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const res = await axios.get(URL_GET, HeaderDefault)
    try {
      this.setState({ recommendedMusicOnPlaylist: res.data.result.tracks })
    }
    catch {
      console.log('error')
    }
  }

  //Captura Id de musicas da Playlist recomendada por um map, o resultado é inserido no GetMusic com o id de musicas, fazendo assim exibir musicas dentro da playlist na tela

  putId = () => {
    this.state.recommendedIdPlaylist.map((idPlay => {
      return this.GetMusic(idPlay.id)
    }))
  }

  //Requisições de API do Usuário

  //Criar Playlists
  postUserPlaylist = () => {

    const userHeader = {
      headers: {
        Authorization: this.state.userHeader
      }
    };
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    const Body = {
      name: this.state.usercreatePlaylistName
    }
    axios.post(URL, Body, userHeader)
      .then(() => {
        this.getUserPlaylists();
        this.setState({ usercreatePlaylistName: '' })
        alert('Playlist Criada com Sucesso !');
      })
      .catch(() => {
        console.log('ocorreu um erro')
      })
  }

  //Receber Playlists do usuário
  getUserPlaylists = async () => {
    const userHeader = {
      headers: {
        Authorization: this.state.userHeader
      }
    };
    const res = await axios.get(BASE_URL, userHeader)
    try {
      this.setState({ userPlaylists: res.data.result.list, userIdPlaylist: res.data.result.list })
      this.onCLickBiblioteca()
    }
    catch {
      alert("Ocorreu um erro ao carregar sua playlist")
    }
  }

  //Recebe musicas dentro a playlist selecionada do usuario
  GetUserMusic = async (id) => {
    const userHeader = {
      headers: {
        Authorization: this.state.userHeader
      }
    };
    const URL_GET = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    const res = await axios.get(URL_GET, userHeader)
    try {
      this.setState({ userMusics: res.data.result.tracks })
      this.setState({ newPlaylistId: id })
    }
    catch {
      console.log('error')
    }
  }

  //Adiciona nova musica na playlist

  postUserTrackOnPlaylist = () => {
    const header = {
      headers: {
        Authorization: this.state.userHeader
      }
    }
    const body = {
      name: this.state.newPlaylistName,
      artist: this.state.newPlaylistArtist,
      url: this.state.newPlaylistUrl
    }
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.newPlaylistId}/tracks`

    axios
      .post(URL, body, header)
      .then(() => {
        this.setState({ newPlaylistArtist: '', newPlaylistName: '', newPlaylistUrl: '' })
      })
  }

  //Deletar Musicas do usuario

  //Deletar Playlists do usuario

  //Onclicks do menu lateral
  onCLickBiblioteca = () => {
    this.setState({ display: 'Biblioteca' })
  }
  onClickPlayLists = () => {
    this.setState({ display: 'Baroes' })
  }
  onClickCriarPlaylist = () => {
    this.setState({ display: 'CriarPlaylist' })
  }
  onClickUserMusics = () => {
    this.setState({ display: 'ListaMusica' })
  }
  onClickLogin = () => {
    this.setState({ display: 'Login', userHeader: '' })
  }

  //HANDLES DE INPUTS
  //Captura os dados inseridos no campo Criar Playlist, encaminha para o state e lá é tratado e dado um get com a mensagem
  handlePlaylist = (event) => {
    this.setState({ usercreatePlaylistName: event.target.value })
    console.log(this.state.usercreatePlaylistName)
  }
  handleUser = (event) => {
    this.setState({ userHeader: event.target.value })
  }

  //Handle para adição de musicas na playlist
  handleName = (event) => {
    this.setState({ newPlaylistName: event.target.value })
    console.log(this.state.newPlaylistName)
  }
  handleArtist = (event) => {
    this.setState({ newPlaylistArtist: event.target.value })
    console.log(this.state.newPlaylistArtist)
  }
  handleUrl = (event) => {
    this.setState({ newPlaylistUrl: event.target.value })
    console.log(this.state.newPlaylistUrl)
  }

  render() {

    //Map de Playlist do Usuário
    const userPlaylistMap = this.state.userPlaylists.map((userPlay) => {
      return (
        <div className="album" key={userPlay.id} onClick={() => this.GetUserMusic(userPlay.id)
        }>
          <img src={SongLogo} alt="" />
          <div className="album-info">
            <h2>{userPlay.name}</h2>
            <a href="#" target="" onClick={this.onClickUserMusics}>PLAY NOW</a>
          </div>
        </div >

      )
    })

    //Map de Musicas do Usuário
    const userMusicsMap = this.state.userMusics.map((song) => {
      return (
        <div key={song.id} className="div-in-map">
          <section className="left-section">
            <img src={SongLogo} alt="" />
            <div className="text-align">
              <li>{song.artist}</li>
              <li>{song.name}</li>
            </div>
          </section>
          <audio src={song.url} controls />
        </div>
      )
    })

    // Map de Playlists Recomendadas
    const PlayLists = this.state.recommendedPlaylists.map((play) => {
      return (<>
        <h2 key={play.id} onClick={this.onClickPlayLists}>{play.name}</h2>
      </>
      )
    })

    // Map de Musicas Recomendadas
    const SongsOnPlaylist = this.state.recommendedMusicOnPlaylist.map((song) => {
      return (
        <div key={song.id} className="div-in-map">
          <section className="left-section">
            <img src="https://studiosol-a.akamaihd.net/tb/160x160/palcomp3-logo/e/5/f/3/4db3ad13bb8a43a19ed3a1e269e93352.jpg" alt="" />
            <div className="text-align">
              <li>{song.artist}</li>
              <li>{song.name}</li>
            </div>

          </section>
          <audio src={song.url} controls />
        </div>
      )
    })
    if (this.state.display === 'Login') {
      return <>
        <LoginPage handleUser={this.handleUser} mudarPagina={this.onCLickBiblioteca} getUserPlaylists={this.getUserPlaylists} />
        <GlobalStyle />
      </>
    }
    return (
      <Main>
        <header>
          <div className="user-info">
            <div className="user-info-left_side">
              <img src={AstroDev} alt="Astrodev" />
              <h3>{this.state.userHeader}</h3>
            </div>

            <img src={ExitIcon} alt="Sair" onCLick={this.onClickLogin} />
          </div>

        </header>

        <div className="left-side">
          <img src={AstroFy} alt="" className="astro-img" />
          <h3>AstroFy</h3>
          <h2 onClick={this.onCLickBiblioteca}>Sua Biblioteca</h2>
          <h2 onClick={this.onClickUserMusics}>Suas Músicas</h2>
          <h2 onClick={this.onClickCriarPlaylist}>Criar Playlist</h2>
          <br />
          <h3>Playlists Recomendadas</h3>
          {PlayLists}
        </div>
        <main>
          {
            this.state.display === 'Baroes' &&
            <MusicList SongsOnPlaylist={SongsOnPlaylist} />
          }
          {
            this.state.display === 'Biblioteca' &&
            <>
              <h1 className="biblioteca-h1">Suas Playlist</h1>
              <Albums>
                {userPlaylistMap}
                {this.onClickUserMusics}
              </Albums>

            </>
          }
          {
            this.state.display === 'CriarPlaylist' &&
            <CriarPlaylist handlePlaylist={this.handlePlaylist} userCreatePlaylist={this.postUserPlaylist} />
          }
          {
            this.state.display === 'ListaMusica' &&
            <MusicList SongsOnPlaylist={userMusicsMap} handleName={this.handleName} handleUrl={this.handleUrl} handleArtist={this.handleArtist} postUserTrackOnPlaylist={this.postUserTrackOnPlaylist} />
          }
        </main>

        <GlobalStyle />
      </Main >
    );
  }
}
export default App;