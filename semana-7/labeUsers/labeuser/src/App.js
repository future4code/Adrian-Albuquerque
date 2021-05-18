import React from 'react'
import { MainContainer } from './styles/styled'
import Global from './styles/globalstyle'
import axios from 'axios'
import Cadastro from './components/home/Cadastro'
import UserDB from './components/UserDB/UserDB'
const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const header = {
  headers: {
    Authorization: "adrian-americo-paiva"
  }
};


class App extends React.Component {

  state = {
    userName: '',
    userEmail: '',
    listaUser: []
  }

  handleUser = (event) => {
    this.setState({ userName: event.target.value })
  }
  handleEmail = (event) => {
    this.setState({ userEmail: event.target.value })
  }

  createNewUser = () => {

    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    }

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("Requisição aceita com sucesso !")
      })
      .catch((err) => {
        alert(err)
      })
  }

  getAllUsers = () => {

    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({ listaUser: res.data.result })
      })
      .catch((err) => {
        alert(err.response.data)
      })

  }

  render() {

    return (
      <MainContainer>
        <Cadastro handleUser={this.handleUser} handleEmail={this.handleEmail} submitNewUser={this.createNewUser} />
        <UserDB mostrarUsuarios={this.getAllUsers}/>
        <Global />

      </MainContainer>

    );
  }
}
export default App;
