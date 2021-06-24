import React from 'react';
import { TextField } from '@material-ui/core';
import './header.scss';
import '../../styles/button.scss';

export function Header({ sendPost, onChange, data }) {
    return (
        <form onSubmit={sendPost} id="headerForm">
            <TextField placeholder="Titulo" value={data.title} onChange={onChange} variant="outlined" label="Titulo" name="title" style={{ width: '50%' }} />
            <div style={{ margin: "1px 0" }} />
            <TextField placeholder="Como está se sentindo ?" value={data.body} onChange={onChange} variant="outlined" label="Mensagem" name="body" style={{ width: '50%' }} multiline rows={4} color="secondary" />
            <button className="button" style={{ margin: "5px" }}>Enviar</button>
        </form>
    )
}