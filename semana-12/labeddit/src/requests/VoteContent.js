import axios from 'axios';
import { BASE_URL, headers } from '../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';

export function createPostVote(id, body, refresh) {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, headers)
        .then((res) => {
            refresh()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export function createCommentVote(id, body, refresh) {
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, headers)
        .then((res) => {
            refresh()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export function changePostVote(id, refresh) {
    axios.put(`${BASE_URL}/posts/${id}/votes`, headers)
        .then((res) => {
            refresh()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export function changeCommentVote(id, refresh) {
    axios.put(`${BASE_URL}/posts/${id}/votes`, headers)
        .then((res) => {
            refresh()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export function deletePostVote(id, refresh) {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, headers)
        .then(refresh())
        .catch((err) => {
            console.log(err.response.data)
        })
}

export function deleteCommentVote(id, refresh) {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, headers)
        .then(refresh())
        .catch((err) => {
            console.log(err.response.data)
        })
}
