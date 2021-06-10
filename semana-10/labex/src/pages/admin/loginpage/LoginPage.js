import React, { useState, useEffect } from 'react';
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
    useEffect(() => {
        console.log("email", email)
        console.log("senha", password)
        const body = { email, password }
        setBodyPage(body)
    }, [email, password])

    return (
        <div>
            <h1>Login Page</h1>
            <input placeholder="nome" value={email} type="email" onChange={handleEmail}></input>
            <input placeholder="senha" value={password} type="password" onChange={handlePassword}></input>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button onClick={Login}>Logar</button>
        </div>
    )
}
export default LoginPage;