import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLastPage } from '../../../coordinator';
import useProtectedPage from '../../../../hooks/useProtectedPage';
import { createTrip } from '../../../../requests/Request';
import useApplicationForm from '../../../../hooks/useApplicationForm';

function CreateTripPage() {
    const history = useHistory();
    useProtectedPage()
    const { body, onChange, clear } = useApplicationForm({ name: "", planet: "", date: "", descripton: "", durationInDays: "" })

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
        ("0" + (today.getMonth() + 1)).substr(-2) + "-"
        + ("0" + today.getDate()).substr(-2)

    const onClickCreate = (e) => {
        e.preventDefault()
        createTrip(body, clear)
    }

    return (
        <div>
            <h1>Postar Viagens</h1>
            <form onChange={onClickCreate}>
                <input
                    placeholder="nome"
                    name="nome"
                    value={body.name}
                    onChange={onChange}
                    pattern={"^.{5,}$"}
                    title="Nome da viagem precisa de no minimo 5 caracteres !"
                    required
                />

                <select
                    placeholder="Planeta"
                    name="planet"
                    defaultValue=""
                    onChange={onChange}
                    required
                >
                    <option value="" disabled>Escolha um Planeta</option>
                    {/* {
                        planets.map(planet => {
                            return <option value={planet} key={planet}>{planet}</option>
                        })
                    } */}

                </select>

            </form>
            <button>Criar</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default CreateTripPage;
