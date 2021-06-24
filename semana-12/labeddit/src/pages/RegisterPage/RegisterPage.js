import React from 'react';
import { useRegister } from '../../requests/AppAccess';
import useInputData from '../../hooks/useInputData';
import { Register } from '../../components/Register/Register';

function RegisterPage() {
    document.title = "LabeEddit | Registrar";
    const { data, onChange, clear } = useInputData({ username: "", email: "", password: "" });
    const register = useRegister("/users/signup", data);


    const onClickToSend = (event) => {
        event.preventDefault();
        register();
        clear();
    }
    return (
        <div>
            <form onSubmit={onClickToSend}>
                <Register type="text" name="username" value={data.username} title="Nome de usuário inválido" label="Nome de usuário" mudaValor={onChange}
                />
                <Register type="email" name="email" value={data.email} title="Digite um email válido" label="E-mail" mudaValor={onChange}
                />
                <Register type="password" name="password" value={data.password} title="Digite uma senha" label="Senha" mudaValor={onChange}
                />
                <button>Cadastrar</button>
            </form>
        </div>
    )
}
export default RegisterPage;