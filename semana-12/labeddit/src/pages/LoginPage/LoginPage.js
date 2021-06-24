import React from 'react';
import useInputData from '../../hooks/useInputData';
import { useLogin } from '../../requests/AppAccess';
import { Link } from 'react-router-dom';
import { Login } from '../../components/Login/Login';
import '../../styles/accesscontent.scss';
function LoginPage() {
    document.title = "LabeEddit | Login";
    const { data, onChange, clear } = useInputData({ email: "", password: "" });
    const login = useLogin("/users/login", data)

    const onClickToSend = (event) => {
        event.preventDefault();
        login();
        clear();
    }
    return (
        <div id="accessContainer">
            <div className="formContainer">
                <form onSubmit={onClickToSend}>
                    <div className="formInputs">
                        <Login type="email" name="email" value={data.email} title="O email precisa ser válido" label="E-mail" mudaValor={onChange} />
                        <br />
                        <Login type="password" name="password" value={data.password} title="a senha precisa ser válida" label="Senha" mudaValor={onChange} />
                    </div>

                    <div className="buttons">
                        <button className="button">Entrar</button>
                        <Link to="/register">Não possui uma conta ?</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default LoginPage;