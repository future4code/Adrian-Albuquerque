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
                setTrips(err)
            }))
    }
    useEffect(() => {
        getTripsData();
    }, []);

    return trips;
}

export const usePostTrips = (initialState, url, body) => {

    const [data, setData] = useState(initialState);

    const getPostsData = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then((res => {
                setData(res.data)
                console.log(data)
            }))
            .catch((err => {
                alert(err.response.data.message)
            }))
        return data
    }
    return getPostsData;
}

export const useLogin = (initialState, url, body) => {
    const [data, setData] = useState(initialState);
    const history = useHistory();

    const postUseLogin = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then(res => {
                setData(res.data);
                localStorage.setItem("token", res.data.token);
                console.log(data)
                history.push("/admin/trips/list")
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }
    return postUseLogin;
}

export const getTripsDetails = (id) => {
    const header = {
        headers: { auth: localStorage.getItem("token") }
    }

    const getTrip = () => {
        axios.get(`${BASE_URL}/trip/${id}`, header)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    console.log(header)
}

