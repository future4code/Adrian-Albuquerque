import React, { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { usePostTrips } from '../../../requests/Request';

function ApplicationFormPage() {
    document.title = "LabeX | Cadastro de Viagem";
    const [name, changeName] = useForm("");
    const [age, changeAge] = useForm("");
    const [applicationText, changeApplicationText] = useForm("");
    const [profession, changeProfession] = useForm("");
    const [country, changeCountry] = useState([]);
    const [selectCountry, setSelectCountry] = useState("Selecione o seu pais");
    const [allDataInputed, setAllDataInputed] = useState([]);

    // usePostTrip()
    const postBody = usePostTrips([], '/trips', allDataInputed);

    useEffect(() => {
        getAllCountry();
        handleData();
    }, [name, age, applicationText, profession, selectCountry])

    const body = [{ name, age, applicationText, profession, country, }]
    const handleData = () => {
        setAllDataInputed(body)
        console.log(allDataInputed)
    }

    const history = useHistory();
    const params = useParams();

    const getAllCountry = () => {
        axios.get(countryAPI)
            .then(res => {
                changeCountry(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }
    const submitValidation = () => {
        if (name && age && applicationText && profession !== '' && country !== "Selecione o seu pais") {
            console.log(allDataInputed);
            postBody();
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

                <input placeholder="Nome" onChange={changeName} value={name}></input>
                <input placeholder="Idade" onChange={changeAge} value={age}></input>
                <input placeholder="Texto de candidatura" onChange={changeApplicationText} value={applicationText}></input>
                <input placeholder="Profissao" onChange={changeProfession} value={profession}></input>

                <div>
                    <select onChange={onChangeCountry}>
                        <option>{selectCountry}</option>
                        {country ? country.map(pais => {
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