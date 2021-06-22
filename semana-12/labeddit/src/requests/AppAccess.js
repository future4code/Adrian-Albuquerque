import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useHistory } from 'react-router';
export const Login = (url, body) => {
    console.log(body)
    axios.post(`${BASE_URL}${url}`, body)
        .then((res => {
            console.log(res)
        }))
        .catch((err) => {
            alert(err.response.data)
        })
}

export const Register = (url, body) => {
    const history = useHistory();
    axios.post(`${BASE_URL}${url}`, body)
        .then((res => {
            console.log(res.data.token);
            localStorage.setItem("token", res.data.token);
            history.push("/")
            
        }))
        .catch((err) => {
            err.response.data.message === "Erro ao validar os seguintes parâmetros:" ?
                alert("Confira os campos e tente novamente") : alert(err.response.data.message)
        })
}