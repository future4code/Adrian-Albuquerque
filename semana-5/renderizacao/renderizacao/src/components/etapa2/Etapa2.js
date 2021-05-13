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
                <h1>etapa 2 - informações <br/> do ensino superior</h1>
                <h2>5. Qual o curso ?</h2>
                <input placeholder="Curso" />

                <h2>6. Qual a unidade de ensino ?</h2>
                <input placeholder
                    ="Digite sua unidade de ensino" />

                <button><span>Enviar</span></button>
            </PrimeiraEtapa>
        )

    }

}