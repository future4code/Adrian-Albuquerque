import React from 'react';
import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router';


function LoginPage() {
    const history = useHistory();
    return (
        <div>
            <h1>Login Page</h1>
            <input placeholder="nome"></input>
            <input placeholder="senha"></input>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
            <button>Logar</button>
        </div>
    )
}
export default LoginPage;