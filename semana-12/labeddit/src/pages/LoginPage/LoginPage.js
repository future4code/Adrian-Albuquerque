import React from 'react';
import useInputData from '../../hooks/useInputData';
import { useLogin } from '../../requests/AppAccess';
import { goToRegisterPage } from '../../constants/Cordinator';
import { useHistory } from 'react-router-dom';
import { Login } from '../../components/Login/Login';

function LoginPage() {
    document.title = "LabeEddit | Login";
    const { data, onChange, clear } = useInputData({ email: "", password: "" });
    const login = useLogin("/users/login", data)
    const history = useHistory()

    const onClickToSend = (event) => {
        event.preventDefault();
        login();
        clear();
    }
    return (
        <div>
            <form onSubmit={onClickToSend}>
                <Login type="email" name="email" value={data.email} title="O email precisa ser válido" label="E-mail" mudaValor={onChange} />
                <Login type="password" name="password" value={data.password} title="a senha precisa ser válida" label="Senha" mudaValor={onChange} />
                <button>Enviar</button>
            </form>
            <p>Não possui uma conta ?</p>
            <button onClick={() => goToRegisterPage(history)}>Cadastrar</button>
        </div>
    )
}
export default LoginPage;