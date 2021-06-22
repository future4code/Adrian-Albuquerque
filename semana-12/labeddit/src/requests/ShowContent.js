import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';

export const useGetAllPosts = (url, initialState) => {
    const [data, setData] = useState(initialState);
    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            Authorization: token
        }
    };
    const getPost = () => {
        axios.get(`${BASE_URL}${url}`, headers)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    useEffect(() => {
        getPost();
    }, [])

    return data;
}

export const useGetPostComments = (id, initialState) => {
    const [data, setData] = useState(initialState);
    const token = localStorage.getItem("token")

    const headers = {
        headers: {
            Authorization: token
        }
    };
    const getPost = () => {
        axios.get(`${BASE_URL}/posts/${id}/comments`, headers)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }
    useEffect(() => {
        getPost();
    }, [])

    return data;
}