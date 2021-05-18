import React from 'react';
import { ListaContainer } from '../../styles/styled'

export default class UserDB extends React.Component {


    render() {
        const listaDeUsuarios = this.props.mostrarUsuarios.map((user) => {
            return <li key={user.key}>{user.nome}</li>
        })
        return (
            <ListaContainer>
                {listaDeUsuarios}
            </ListaContainer>
        )
    }
}