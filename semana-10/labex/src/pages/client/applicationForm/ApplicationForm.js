import React, { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { usePostTrips } from '../../../requests/Request';

function ApplicationFormPage() {
    const [nome, changeNome] = useForm("");
    const [idade, changeIdade] = useForm("");
    const [textoCandidatura, changeTextoCandidatura] = useForm("");
    const [profissao, changeProfissao] = useForm("");
    const [allCountry, setAllCountry] = useState([]);
    const [selectCountry, setSelectCountry] = useState("Selecione o seu pais");
    const [allDataInputed, setAllDataInputed] = useState([]);

    // usePostTrip()
    const postBody = usePostTrips([], '/trips', allDataInputed);
    useEffect(() => {
        getAllCountry();
        handleData();
    }, [nome, idade, textoCandidatura, profissao, selectCountry])

    const corpo = [{
        name: nome,
        age: idade,
        applicationText: textoCandidatura,
        profession: profissao,
        country: selectCountry
    }]
    const handleData = () => {
        setAllDataInputed(corpo)
        console.log(allDataInputed)
    }

    const history = useHistory();
    const params = useParams();

    const getAllCountry = () => {
        axios.get(countryAPI)
            .then(res => {
                setAllCountry(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }
    const submitValidation = () => {
        if (nome && idade && textoCandidatura && profissao !== '' && allCountry !== "Selecione o seu pais") {
            console.log(allDataInputed);
            postBody([], '/trips', allDataInputed)
        } else {
            alert("preencha todos os campos")
        }
    }

    const onChangeCountry = (event) => {
        setSelectCountry(event.target.value)
        console.log(selectCountry)
    }
    return (
        <div>
            <div>
                <p>Pagina de formulário</p>

                <select>
                    <option>
                        Escolha uma Viagem
                    </option>
                </select>

                <input placeholder="Nome" onChange={changeNome} value={nome}></input>
                <input placeholder="Idade" onChange={changeIdade} value={idade}></input>
                <input placeholder="Texto de candidatura" onChange={changeTextoCandidatura} value={textoCandidatura}></input>
                <input placeholder="Profissao" onChange={changeProfissao} value={profissao}></input>

                <div>
                    <select onChange={onChangeCountry}>
                        <option>{selectCountry}</option>
                        {allCountry ? allCountry.map(pais => {
                            return <option key={pais.name}>{pais.name}</option>
                        }) : <p>Carregando</p>}
                    </select>
                </div>

            </div>
            <div>
                <button onClick={() => goToLastPage(history)}>Voltar</button>
                <button onClick={submitValidation}>Enviar</button>
            </div>

        </div>
    )
}
export default ApplicationFormPage;