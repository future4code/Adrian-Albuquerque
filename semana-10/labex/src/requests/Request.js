import { useEffect, useState } from 'react';
import axios from 'axios';
const AUTH = 'adrian-americo-paiva';
const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${AUTH}`;

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
    console.log(body)
    const [data, setData] = useState(initialState);

    const getPostsData = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then((res => {
                setData(res.data)
                console.log(data)
            }))
            .catch((err => {
                alert(err)
            }))
        return data
    }
    return getPostsData;
}
