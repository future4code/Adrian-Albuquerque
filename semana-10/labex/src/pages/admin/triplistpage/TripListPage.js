import React, { useState, useEffect } from 'react';
import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { useListTripsDetails } from '../../../requests/Request';

function TripListPage() {
    const params = useParams();
    const history = useHistory();
    const tripList = useListTripsDetails([], params.id);
    const [travelCandidates, setTravelCandidates] = useState([])

    const tripMap = [tripList]
    console.log(tripList.candidates)
    

    useEffect(() => {
        console.log(travelCandidates)
    }, [])
    return (
        <div>
            {
                tripMap ? tripMap.map(res => {
                    return <div>
                        <h2>Viagem para {res.planet}</h2>
                        <p>Nome: {res.name}</p>
                        <p>Descrição {res.description}</p>
                        <p>Planeta {res.planet}</p>
                        <p>Duração {res.durationInDays}</p>
                        <p>{res.date}</p>
                        <br />

                        <h2>CANDIDATOS APROVADOS</h2>
                        <p>{res.approved}</p>
                    </div>

                }) : <p>Carregando</p>
            }
    
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default TripListPage