import React, { useState } from 'react';
import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import { useLogin } from '../../../requests/Request';

function LoginPage() {
    document.title = "LabeX | Login";
    const history = useHistory();

    const [email, handleEmail] = useForm("");
    const [password, handlePassword] = useForm("");
    const [bodyPage, setBodyPage] = useState([]);

    const Login = useLogin([], '/login', bodyPage);

    const onClickLogin = () => {
        const body = { email, password }
        setBodyPage(body)
        Login();
    }

    return (
        <div>
            <h1>Login Page</h1>
            <input placeholder="nome" value={email} type="email" onChange={handleEmail}></input>
            <input placeholder="senha" value={password} type="password" onChange={handlePassword}></input>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={onClickLogin}>Logar</button>
        </div>
    )
}
export default LoginPage;