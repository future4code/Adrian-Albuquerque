import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useLayoutEffect, useState } from 'react';

export const useGetAllPosts = (initialState) => {
    const [allPosts, setAllPosts] = useState(initialState);

    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            getPost()
        } 
    }, [])

    const getPost = () => {
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setAllPosts(res.data)
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    return [allPosts, getPost]
}

export const useGetPostComments = (id, initialState) => {
    const [allComments, setAllComments] = useState(initialState);

    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            getComments()
        }
    }, [])

    const getComments = () => {
        axios.get(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setAllComments(res.data)

            })
            .catch((err) => {
                alert("Ocorreu um erro de Autorização, redirecionando para página de Login")
                localStorage.clear()
            })
    }
    return [allComments, getComments];
}