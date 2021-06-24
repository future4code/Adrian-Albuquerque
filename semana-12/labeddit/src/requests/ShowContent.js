import axios from 'axios';
import { BASE_URL, headers } from '../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';

export const useGetAllPosts = (initialState) => {
    const [allPosts, setAllPosts] = useState(initialState);

    const getPost = () => {
        axios.get(`${BASE_URL}/posts`, headers)
            .then((res) => {
                setAllPosts(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    useEffect(() => {
        getPost();
    }, [])

    return [allPosts, getPost]
}

export const useGetPostComments = (id, initialState) => {
    const [allComments, setAllComments] = useState(initialState);

    const getComments = () => {
        axios.get(`${BASE_URL}/posts/${id}/comments`, headers)
            .then((res) => {
                setAllComments(res.data)
            })
            .catch((err) => {
                alert("Ocorreu um erro de Autorização, redirecionando para página de Login")
                localStorage.clear()
            })
    }
    useEffect(() => {
        getComments();
    }, [])

    return [allComments, getComments];
}