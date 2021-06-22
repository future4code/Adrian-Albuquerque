import React from 'react';
import { useRegister } from '../../requests/AppAccess';
import useInputData from '../../hooks/useInputData';
import { TextField } from '@material-ui/core';

function RegisterPage() {
    document.title = "LabeEddit | Registrar";
    const { data, onChange, Clear } = useInputData([]);
    const Register = useRegister("/users/signup", data);

    const campoTexto = (type, name, value, title, label) => {
        return <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={onChange}
            required
            type={type} name={name} value={value} title={title} label={label} />
    }
    const onClickToSend = (event) => {
        event.preventDefault();
        Register();
        Clear();
    }

    return (
        <div>
            <form onSubmit={onClickToSend}>
                {campoTexto("text", "username", data.username, "Digite uma nome válido", "Nome de Usuário")}
                {campoTexto("email", "email", data.email, "Digite uma email válido", "E-mail")}
                {campoTexto("password", "password", data.password, "Digite uma senha válida", "Senha")}
                <button>Cadastrar</button>
            </form>
        </div>
    )
}
export default RegisterPage;