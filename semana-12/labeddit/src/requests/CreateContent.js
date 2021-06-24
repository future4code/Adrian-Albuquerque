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

export function createComment(id, body, getComments) {
    axios.post(`${BASE_URL}/posts/${id}/comments`,body, headers)
    .then(() => {
        
        getComments()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}