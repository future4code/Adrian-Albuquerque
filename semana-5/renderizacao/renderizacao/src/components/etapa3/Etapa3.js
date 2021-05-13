import React from 'react';
import { PrimeiraEtapa } from '../../styles/styled'

export default class Etapa2 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: "",
        opcao: ""
    };

    render() {

        return (
            <PrimeiraEtapa>
                <h1>etapa 3 - informações <br/> gerais do ensino</h1>
                <h2>5. Por que você não terminou um curso de graduação ?</h2>
                <input placeholder="Digite aqui" />

                <h2>6. Você fez algum curso complementar ?</h2>
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>

                <button><span>Enviar</span></button>
            </PrimeiraEtapa>
        )

    }

}