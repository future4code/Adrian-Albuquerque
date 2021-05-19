import React from 'react'
import { MainContainer } from './styles/styled'
import Global from './styles/globalstyle'
import axios from 'axios'
import Cadastro from './components/home/Cadastro'
import UserDB from './components/UserDB/UserDB'


const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
const header = {
  headers: {
    Authorization: "adrian-americo-paiva"
  }
};

export default class App extends React.Component {


  state = {
    userName: '',
    userEmail: '',
    listaUser: [],
    trocarDePagina: false
  }

  handleUser = (event) => {
    this.setState({ userName: event.target.value })
  }
  handleEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  componentDidMount() {
    this.getAllUsers()
  }

  mudaPagina = () => {
    this.setState({ trocarDePagina: !this.state.trocarDePagina });
  }

  createNewUser = () => {

    const header = {
      headers: {
        Authorization: "adrian-americo-paiva"
      }
    };

    const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    };

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("Requisição aceita com sucesso !")
        this.setState({ userName: "", userEmail: "" })
        this.mudaPagina()
        this.getAllUsers()

      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleClickEnter = (event) => {
    if (event.keyCode === 13) {
      this.createNewUser();
    }
  };


  getAllUsers = () => {
    const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({ listaUser: res.data })
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response);
      });
  }

  render() {

    const lista = this.state.listaUser.map((user) => {
      return <li key={user.id}>{user.name}</li>
    })

    const troca = this.state.trocarDePagina
    return (

      <MainContainer>

        {!troca &&
          <Cadastro handleUser={this.handleUser} handleEmail={this.handleEmail} createNewUser={this.createNewUser} handleClickEnter={this.handleClickEnter} />

        }
        {troca &&
         <div className="lista-container">
          <div className="lista-de-usuarios">

            <ul>
              <h1>Usuarios</h1>
              {lista}
            </ul>

          </div>

        </div>

        }
        < Global />
      </MainContainer >
    )


  }
}