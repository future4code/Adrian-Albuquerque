import React from 'react';
import useInputData from '../../hooks/useInputData';
import { TextField } from '@material-ui/core';
import { useLogin } from '../../requests/AppAccess';
import { goToRegisterPage } from '../../constants/Cordinator';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    document.title = "LabeEddit | Login";
    const { data, onChange, Clear } = useInputData([]);
    const Login = useLogin("/users/login", data)
    const history = useHistory()

    const onClickToSend = (event) => {
        event.preventDefault();
        Login();
        Clear();
    }
    const campoTexto = (type, name, value, title, label) => {
        return <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={onChange}
            required
            type={type} name={name} value={value} title={title} label={label} />
    }
    return (
        <div>
            <form onSubmit={onClickToSend}>
                {campoTexto("email", "email", data.email, "O email precisa ser válido", "E-mail")}
                {campoTexto("password", "password", data.password, "Digite uma senha válida", "Senha")}
                <button>Enviar</button>
            </form>
            <p>Não possui uma conta ?</p>
            <button onClick={() => goToRegisterPage(history)}>Cadastrar</button>
        </div>

    )
}
export default LoginPage;