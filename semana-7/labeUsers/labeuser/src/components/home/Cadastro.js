import React from 'react'
import { HomeContainer } from '../../styles/styled'
import EmailIcon from '../../img/o-email.svg'
import UserIcon from '../../img/user.svg'
export default class Cadastro extends React.Component {
    render() {
        return (
            <HomeContainer>
                <div className="login-area">
                    <h1>Login</h1>
                    <div className="text-box">
                        <img src={UserIcon} alt=""/>
                        <input onChange={this.props.handleUser} placeholder="Nome de Usuario" type="text" />
                    </div>

                    <div className="text-box">
                        <img src={EmailIcon} alt=""/>
                        <input type="email" onChange={this.props.handleEmail} placeholder="E-mail" onKeyDown={this.props.handleClickEnter} />
                    </div>

                    <button onClick={this.props.createNewUser}>Submit</button>
                </div>
            </HomeContainer>
        )
    }
}