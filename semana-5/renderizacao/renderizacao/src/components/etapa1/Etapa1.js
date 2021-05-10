import React from 'react';
import { PrimeiraEtapa } from '../../styles/styled'

export default class Etapa1 extends React.Component {
state = {
    nome: "",
    idade: "",
    email: "",
    opcao: ""
};

    render() {

        return (
            <PrimeiraEtapa>
                <h1>etapa 1 - dados gerais</h1>
                <h2>1. Qual o seu Nome ?</h2>
                <input placeholder="Nome"/>

                <h2>2. Qual sua idade ?</h2>
                <input placeholder 
                ="Idade"/>

                <h2>3. Qual seu E-mail ?</h2>
                <input placeholder="E-Mail"/>

                <h2>4. Qual sua escolaridade ?</h2>
                <select>
                    <option>Ensino Médio incompleto</option>
                    <option>Ensino Médio completo</option>
                    <option>Ensino Superior incompleto</option>
                    <option>Ensino Superior completo</option>
                </select>
                <button><span>Enviar</span></button>
            </PrimeiraEtapa>
        )

    }

}