import axios from 'axios';
import { BASE_URL, headers } from '../constants/constants';

export function createPost(body, getPosts) {
    axios.post(`${BASE_URL}/posts`, body, headers)
        .then(() => {
            alert("comentário criado com sucesso")
            getPosts()
        })
        .catch(() => {
            alert("verifique os campos e tente novamente")
        })
}

export function createComment(id, body) {
    console.log(body)
    axios.post(`${BASE_URL}/posts/${id}/comments`,body, headers)
    .then(() => {
        console.log("Comentário postado com sucesso")
    })
    .catch((err) => {
        console.log(err.response.data)
    })
}