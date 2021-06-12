import React, { useEffect, useState } from 'react';
import useInputForm from '../../../hooks/useInputForm';
import axios from 'axios';
import { countryAPI, goToLastPage } from '../../coordinator';
import { useHistory } from 'react-router-dom';
import { useGetTrips, sendPostTrips } from '../../../requests/Request';
import useApplicationForm from '../../../hooks/useApplicationForm';

function ApplicationFormPage() {

    document.title = "LabeX | Cadastro de Viagem";
    const [countryId, setCountryId] = useInputForm("");
    const [country, changeCountry] = useState([]);
    const history = useHistory();
    const listaDeItem = useGetTrips([], '/trips');
    const { body, onChange, clear } = useApplicationForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    useEffect(() => {
        getAllCountry();
    }, [])

    const onClickSend = (e) => {
        e.preventDefault()
        sendPostTrips(countryId, body)
        clear();
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

    return (
        <div>
            <div>
                <p>Pagina de formulário</p>
                <div>
                    <form onSubmit={onClickSend}>

                        <select value={countryId} onChange={setCountryId} required>
                            <option></option>
                            {listaDeItem && listaDeItem.length > 0 ? (
                                listaDeItem.map((trip => {
                                    return (<option key={trip.id} value={trip.id}>{trip.planet}</option>)
                                }))
                            ) : <option>Carregando...</option>
                            }
                        </select>

                        <input
                            placeholder={"Nome"}
                            name={"name"}
                            value={body.name}
                            onChange={onChange}
                            pattern={"^.{3,}$"}
                            title={"O nome deve ter no mínimo 3 caracteres"}
                            required
                        />
                        <input
                            placeholder={"Idade"}
                            name={"age"}
                            type={"number"}
                            onChange={onChange}
                            value={body.age}
                            required
                            min={18}
                        />
                        <input
                            placeholder="Texto de candidatura"
                            onChange={onChange}
                            name={"applicationText"}
                            value={body.applicationText}
                            required
                            pattern={"^.{30,}$"}
                            title={"O texto deve ter no mínimo 30 caracteres"}
                        />
                        <input
                            placeholder="Profissao"
                            name={"profession"}
                            onChange={onChange}
                            value={body.profession}
                            required
                            pattern={"^.{10,}$"}
                            title={"A profissão deve ter no mínimo 10 caracteres"}
                        />

                        <select onChange={onChange} name={"country"} value={body.country} required>
                            <option></option>
                            {country ? country.map(pais => {
                                return <option key={pais.name} value={pais.name}>{pais.name}</option>
                            }) : <p>Carregando</p>}
                        </select>

                        <button type={"submit"}>enviar request</button>
                    </form>
                    <button onClick={() => goToLastPage(history)}>Voltar</button>
                </div>
            </div>

        </div >
    )
}
export default ApplicationFormPage;