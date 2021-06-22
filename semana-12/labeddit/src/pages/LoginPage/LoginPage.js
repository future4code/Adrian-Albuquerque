import React from 'react';
import useInputData from '../../hooks/useInputData';
import { TextField } from '@material-ui/core';
import { Login } from '../../requests/AppAccess';
function LoginPage() {
    document.title = "LabeEddit | Login";
    const { data, onChange, Clear } = useInputData([]);

    const onClickToSend = (event) => {
        event.preventDefault();
        console.log("click")
        Login("/users/login", data);
        Clear();
    }
    const campoTexto = (type, name, value, title, label) => {
        return <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={onChange}
            required
            type={type} name={name} value={value} title={title} label={label} />
    }
    return (
        <div>
            <form onSubmit={onClickToSend}>
                {campoTexto("email", "email", data.email, "O email precisa ser válido", "E-mail")}
                {campoTexto("password", "password", data.password, "Digite uma senha válida", "Senha")}
                <button>Enviar</button>
            </form>
        </div>

    )
}
export default LoginPage;