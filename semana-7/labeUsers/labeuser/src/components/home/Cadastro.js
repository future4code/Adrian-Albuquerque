import React from 'react'
import { HomeContainer } from '../../styles/styled'

export default class Cadastro extends React.Component {
    render() {
        return (
            <HomeContainer>
                <div class="login-area">
                    <h1>Login</h1>
                    <span>Usuario</span>
                    <input onChange={this.props.handleUser} />
                    <p>Email</p>
                    <input onChange={this.props.handleEmail} />
                    <button onClick={this.props.submitNewUser} >Submit</button>
                </div>
            </HomeContainer>
        )
    }
}