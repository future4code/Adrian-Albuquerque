import React, { useState, useEffect } from 'react';
import { useGetTripsDetails, useGetTrips } from '../../../../requests/Request';
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../../../../hooks/useProtectedPage';
import { goToHomePage } from '../../../coordinator';

function TripDetailsPage() {

    document.title = "LabeX | Detalhe de Viagens";
    const history = useHistory();
    const tripList = useGetTrips([], "/trips");
    useProtectedPage();
    const [tripId, setTripId] = useState("");
    const getTrip = useGetTripsDetails([], tripId);

    useEffect(() => {
        getTrip();
    }, [tripId])
    const onSubmitTrip = (id) => {
        if (id) {
            setTripId(id);
            history.push(`/admin/trips/list/${id}`)
            getTrip(id);
        }
    }

    return (
        <div>
            <h1>Oi, eu sou a TripDetailsPage</h1>
            {tripList.length > 0 ? (

                tripList.map((trip => {
                    return (
                        <div key={trip.id}>
                            <div>
                                <p>{trip.name}</p>
                                <button onClick={() => onSubmitTrip(trip.id)}>ver Detalhes</button>
                                <button>APAGAR</button>
                            </div>
                        </div>
                    )
                }))
            ) : <p>Carregando</p>
            }(
            {/* {setTripId ? console.log(setTripId) : <p>nada</p>} */}
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button>Logout</button>
            <button>Criar</button>

        </div>


    )
}
export default TripDetailsPage;