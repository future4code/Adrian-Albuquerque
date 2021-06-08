import React from 'react';
import { useGetTrips } from '../../../requests/Request';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormPage from '../applicationForm/ApplicationForm';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../../../styles/components/ListTripsPage.module.scss';
import { goToFormPage, goToLastPage } from '../../coordinator'
import { ChangeHistoryOutlined } from '@material-ui/icons';

function ListTripsPage() {
    const history = useHistory();
    const params = useParams();
    const listaDeItem = useGetTrips([], '/trips')
    console.log(listaDeItem)
    return (
        <div className={styles.TripsContainer}>
            <h1>Oi, eu sou a lista de viagens</h1>
            {!listaDeItem && <CircularProgress />}
            {listaDeItem && (
                listaDeItem.map((trip => {
                    return (
                        <div key={trip.id}>
                            <div>
                                <li>{trip.planet}</li>
                                <li>{trip.name}</li>
                                <li>{trip.description}</li>
                            </div>

                            <div>
                                <li>{trip.durationInDays}</li>
                                <li>{trip.date}</li>
                            </div>

                        </div>
                    )
                }))
            )
            }
            <h2>Inscreva-se !</h2>
            <button onClick={() => goToFormPage(history)}>Inscrever</button>
            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default ListTripsPage;