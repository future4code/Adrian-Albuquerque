import React, { useState, useEffect } from 'react';
import { getTripsDetails } from '../../../../requests/Request';

function TripDetailsPage() {
    document.title = "LabeX | Detalhe de Viagens";
    useEffect(() => {
        getTripsDetails();
    }, []) 
    const [trips, setTrip] = useState({});
    
    return (
        <div>Oi, eu sou a TripDetailsPage</div>
    )
}
export default TripDetailsPage;