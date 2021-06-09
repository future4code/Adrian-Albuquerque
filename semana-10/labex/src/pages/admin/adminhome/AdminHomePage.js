import React from 'react';
import { goToLastPage, goToLoginPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router';

function AdminHomePage() {
    const history = useHistory();
    return (
        <div>
            <h1>Oi, eu sou a AdminHomePage</h1>
            <button onClick={() => goToLastPage(history)}>voltar</button>
            <button onClick={() => goToLoginPage(history)}>Login</button>
        </div>
    )
}
export default AdminHomePage;