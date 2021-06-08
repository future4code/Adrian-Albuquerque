import React, { useEffect, useState } from 'react';
import useForm from '../../../hooks/useForm';
import axios from 'axios';
import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
const countryAPI = "https://restcountries.eu/rest/v2/all";

function ApplicationFormPage() {
    const [nome, changeNome] = useForm("");
    const [idade, changeIdade] = useForm("");
    const [textoCandidatura, changeTextoCandidatura] = useForm("");
    const [profissao, changeProfissao] = useForm("");
    const [allCountry, setAllCountry] = useState([])
    const [selectCountry, setSelectCountry] = useState("Selecione o seu pais")

    useEffect(() => {
        getAllCountry();
    }, [])

    const history = useHistory();
    const params = useParams();

    const data = {
        name: nome,
        age: idade,
        applicationText: textoCandidatura,
        profession: profissao,
        country: selectCountry
    }

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
            console.log("todos os campos foram preenchidos")
        } else {
            console.log("preencha todos os campos")
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