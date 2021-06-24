import React from 'react';
import { createComment } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';
import { TextField } from '@material-ui/core';
import '../../styles/button.scss';
import './createcommentary.scss';

export function CreateCommentary({ id, getComments, setCommentCounter }) {
    const { data, onChange, clear } = useInputData({ body: "" });

    const sendPost = (event) => {
        if (data !== "") {
            event.preventDefault();
            createComment(id, data, getComments, setCommentCounter);
            getComments();
            clear();
        }
    }
    return (
        <form onSubmit={sendPost}>
            <TextField required style={{ width: "90%" }} min={3} pattern="/^.{6,}$/" id="filled-basic" label="Comentar" variant="outlined" placeholder="Comentário" value={data.body} onChange={onChange} name="body" />
            <button className="button">Enviar</button>
        </form>
    )
}



