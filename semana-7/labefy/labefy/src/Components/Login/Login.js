import React from 'react'
import { Login } from '../../Styles/Styled'
import UserIcon from '../../img/user.svg'
export default class LoginPage extends React.Component {
    render() {
        return (
            <Login>
                <div className="login-area">
                    <h1>Login</h1>
                    <div className="text-box">
                        <img src={UserIcon} alt="" />
                        <input onChange={this.props.handleUser} placeholder="Nome de Usuario" type="text" />
                    </div>
                    <button onClick={this.props.getUserPlaylists}>Submit</button>
                </div>
            </Login>
        )
    }
}