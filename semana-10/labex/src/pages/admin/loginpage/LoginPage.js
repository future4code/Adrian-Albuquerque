import React from 'react';
import { goToHomePage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import useLoginHook from '../../../hooks/useLoginHook';
import { useLogin } from '../../../requests/Request';

function LoginPage() {
    document.title = "LabeX | Login";
    const history = useHistory();
    const [bodyData, handleBodyData] = useLoginHook({ email: "", password: "" });

    const Login = useLogin([], '/login', bodyData);

    const fazerLogin = (event) => {
        event.preventDefault();
        Login();
    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={fazerLogin}>

                <input
                    placeholder="E-Mail"
                    value={bodyData.email}
                    type={"email"}
                    name={"email"}
                    onChange={handleBodyData}
                    required
                />

                <input
                    placeholder="senha"
                    name="password"
                    value={bodyData.password}
                    type={"password"}
                    onChange={handleBodyData}
                    pattern={"^.{3,}"}
                    required
                />

                <button type={"submit"} onClick={fazerLogin}>Logar</button>
            </form>
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div >
    )
}
export default LoginPage;