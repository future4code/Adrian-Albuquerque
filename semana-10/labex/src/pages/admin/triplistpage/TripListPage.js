import { goToLastPage } from '../../coordinator';
import { useHistory, useParams } from 'react-router-dom';
import { useListTripsDetails } from '../../../requests/Request';
import useProtectedPage from '../../../hooks/useProtectedPage';

function TripListPage() {
    useProtectedPage()
    const params = useParams();
    const history = useHistory();
    const tripList = useListTripsDetails([], params.id);

    const tripMap = [tripList]
    console.log(tripList.candidates)

    return (
        <div>
            {
                tripMap && tripMap.map(res => {

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
                })
            }

            {tripList && tripList.candidates && tripList.candidates.map(resul => {
                console.log(resul)
                return (<div key={resul.id}>
                    <p>{resul.name}</p>
                    <p>{resul.profession}</p>
                    <p>{resul.age}</p>
                    <p>{resul.country}</p>
                    <p>{resul.applicationText}</p>
                </div>)
            })}

            <button onClick={() => goToLastPage(history)}>Voltar</button>
        </div>
    )
}
export default TripListPage