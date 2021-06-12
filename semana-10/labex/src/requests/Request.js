import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../pages/coordinator';
import { useHistory } from 'react-router-dom';

export const useGetTrips = (initialState, url) => {
    const [trips, setTrips] = useState(initialState);

    const getTripsData = () => {
        axios.get(`${BASE_URL}${url}`)
            .then((res => {
                setTrips(res.data.trips)
            }))
            .catch((err => {
                setTrips(err.response)
            }))
    }
    useEffect(() => {
        getTripsData();
    }, []);

    return trips;
}

export const sendPostTrips = (id, body) => {
    axios.post(`${BASE_URL}/trips/${id}/apply`, body)
        .then(() => {
            alert("Formulário enviado com sucesso. Boa sorte!")

        }).catch(err => {
            alert("Por favor preencha todos os campos e tente novamente.")
            console.log(err.message)
        })

}

export const useLogin = (initialState, url, body) => {

    const [data, setData] = useState(initialState);
    const history = useHistory();

    const postUseLogin = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then(res => {
                setData(res.data);
                localStorage.setItem("token", res.data.token);
                history.push("/admin/trips/list")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        return data
    }
    return postUseLogin;
}

export const useGetTripsDetails = (initialState, id) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(initialState)

    const getTrip = () => {
        axios.get(`${BASE_URL}/trip/${id}`, { headers: { auth: token } })
            .then(res => {
                setData(res.data.trip)

            })
            .catch(err => {
                alert(err.message)
            })
        return data
    }
    return getTrip
}



export const useListTripsDetails = (id, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => setData(res.data))
            .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [id])

    return [data, getData]
}

export const createTrip = (url, body, clear) => {
    axios.post(`${BASE_URL}${url}`, body, {
        headers: { auth: localStorage.getItem("token") }
    })
        .then(() => {
            alert("Viagem criada com sucesso !")
            clear()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

}