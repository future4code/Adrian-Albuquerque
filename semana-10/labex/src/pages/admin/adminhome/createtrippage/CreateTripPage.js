import React from 'react';
import { useHistory } from 'react-router-dom';
import { InputRegexEmail } from '../../../../hooks/useFormValidation';
import { goToLastPage } from '../../../coordinator';

function CreateTripPage() {
    const history = useHistory();
    const teste = InputRegexEmail()
    return (
        <div>
            <h1>Oi, eu sou a pagina de criação de viagens</h1>
            {teste}
            <button>Criar</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default CreateTripPage;
