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

export const useGetTripsDetails = (initialState, id) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(initialState)

    const getTrip = () => {
        axios.get(`${BASE_URL}/trip/${id}`, { headers: { auth: token } })
            .then(res => {
                setData(res.data.trip)
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
        return data
    }
    return getTrip
}

export const useListTripsDetails = (initialState, id) => {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(initialState);
    const [candidates, setCandidates] = useState(initialState)

    const getTripList = () => {
        axios.get(`${BASE_URL}/trip/${id}`, { headers: { auth: token } })
            .then(res => {
                setData(res.data.trip)
                setCandidates(res.data.trip.candidates)
                console.log(data)
            })
            .catch(err => {
                alert(err)
            })
        return [data, candidates];
    }
    useEffect(() => {
        getTripList()
    }, [])
    return data;
}

export const useDeleteSelectedTrip = () => {

}