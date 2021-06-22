import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import { useHistory } from 'react-router-dom';
export const useLogin = (url, body) => {
    const history = useHistory();

    const LoginUser = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then((res => {
                localStorage.setItem("token", res.data.token);
                history.push("/");
                alert("Login efetuado, redirecionando a pagina principal !");
            }))
            .catch((err) => {
                alert(err.response.data)
            })
    }
    return LoginUser;
}

export const useRegister = (url, body) => {
    const history = useHistory();
    const RegisterUser = () => {
        axios.post(`${BASE_URL}${url}`, body)
            .then((res => {
                localStorage.setItem("token", res.data.token);
                alert("Cadastro efetuado com sucesso, redirecionando para a Home page")
                history.push("/");
            }))
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    return RegisterUser;
}