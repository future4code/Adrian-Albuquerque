import React from 'react';
import { useRegister } from '../../requests/AppAccess';
import useInputData from '../../hooks/useInputData';
import { Register } from '../../components/Register/Register';
import '../../styles/accesscontent.scss';
import { Link } from 'react-router-dom';
import useUnProtectedPage from '../../hooks/useUnprotectedPage';
function RegisterPage() {
    document.title = "LabeEddit | Registrar";
    useUnProtectedPage();
    const { data, onChange, clear } = useInputData({ username: "", email: "", password: "" });
    const register = useRegister("/users/signup", data);
    const onClickToSend = (event) => {
        event.preventDefault();
        register();
        clear();
    }

    return (
        <div id="accessContainer">
            <div className="formContainer">
                <form onSubmit={onClickToSend}>
                    <div className="formInputs" style={{ justifyContent: "space-around", flex: "2" }}>
                        <Register type="text" name="username" value={data.username} title="Nome de usuário inválido" label="Nome de usuário" mudaValor={onChange}
                        />
                        <Register type="email" name="email" value={data.email} title="Digite um email válido" label="E-mail" mudaValor={onChange}
                        />
                        <Register type="password" name="password" value={data.password} title="Digite uma senha" label="Senha" mudaValor={onChange}
                        />
                    </div>
                    <div className="buttons" style={{ justifyContent: "space-evenly" }}>
                        <button className="button">Cadastrar</button>
                        <Link to="/login" style={{ cursor: "pointer" }}>Tenho uma conta</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;