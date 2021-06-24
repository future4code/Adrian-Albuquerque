import React from 'react';
import { TextField } from '@material-ui/core';

export function Register({ type, name, value, title, label, mudaValor }) {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            required
            onChange={mudaValor}
            type={type}
            name={name}
            value={value}
            title={title}
            label={label}
        />
    )
}
