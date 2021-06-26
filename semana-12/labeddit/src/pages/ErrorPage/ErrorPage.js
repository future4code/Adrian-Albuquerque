import React from 'react';
import PokeChijo from '../../assets/pikachijo.png';
import './error.scss';

function ErrorPage() {
    document.title = "LabeEddit | Error";
    return (
        <div className="errorContainer">
            <h2>Error 404</h2>
            <h1>Pagina não encontrada</h1>
            <img src={PokeChijo} alt="" className="rotativePokeChijo" />
        </div>
    )
}
export default ErrorPage;
