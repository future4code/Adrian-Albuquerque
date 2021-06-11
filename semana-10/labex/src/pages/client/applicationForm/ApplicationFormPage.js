import React, { useEffect, useState } from 'react';
import useInputForm from '../../../hooks/useInputForm';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import { usePostTrips, useGetTrips } from '../../../requests/Request';

function ApplicationFormPage() {

    document.title = "LabeX | Cadastro de Viagem";
    const [name, changeName] = useInputForm("");
    const [age, changeAge] = useInputForm("");
    const [applicationText, changeApplicationText] = useInputForm("");
    const [profession, changeProfession] = useInputForm("");
    const [choosedCountry, changeChoosedCountry] = useInputForm("");
    const [country, changeCountry] = useState([]);
    const [selectCountry, setSelectCountry] = useState("Selecione o seu pais");
    const [id, setId] = useState("");
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips');

    useEffect(() => {
        console.log(listaDeItem)
        console.log(choosedCountry)
        console.log(id)
        // setTrip();
        getAllCountry();
    }, [choosedCountry, id])


    const submitTravel = () => {
        if (name && age && applicationText && profession !== '' && country !== "Selecione o seu pais") {
            const body = { name, age, applicationText, profession, country }

            axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adrian-americo-paiva/trips/${choosedCountry}/apply`, body)
                .then(() => {
                    alert("Formulário submetido com sucesso. Boa sorte!")
                }).catch(error => {
                    alert("Por favor preencha todos os campos e tente novamente.")
                    console.log(error.message)
                })
        } else {
            alert("preencha todos os campos")
        }


    }


    const getAllCountry = () => {
        axios.get(countryAPI)
            .then(res => {
                changeCountry(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    const onChangeCountry = (event) => {
        setSelectCountry(event.target.value)
    }

    return (
        <div>
            <div>
                <p>Pagina de formulário</p>

                <select value={choosedCountry} onChange={changeChoosedCountry}>
                    {listaDeItem && listaDeItem.length > 0 ? (
                        listaDeItem.map((trip => {
                            // console.log(trip.id)
                            return (<option key={trip.id} value={trip.id}>{trip.planet}</option>)
                        }))
                    ) : <option>Carregando...</option>
                    }
                </select>

                <form onSubmit={submitTravel}>
                    <input placeholder="Nome"
                        onChange={changeName}
                        value={name}
                    />
                    <input
                        placeholder="Idade"
                        onChange={changeAge}
                        value={age}
                    />
                    <input
                        placeholder="Texto de candidatura"
                        onChange={changeApplicationText}
                        value={applicationText}
                    />
                    <input
                        placeholder="Profissao"
                        onChange={changeProfession}
                        value={profession}
                    />
                </form>
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
                <button onClick={submitTravel}>Enviar</button>
            </div>
        </div >
    )
}
export default ApplicationFormPage;