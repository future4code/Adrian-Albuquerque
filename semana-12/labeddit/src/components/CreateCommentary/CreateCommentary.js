import React from 'react';
import { createComment } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';

export function CreateCommentary({ id, getComments, setCommentCounter }) {
    const { data, onChange, clear } = useInputData({ body: "" });
    
    const sendPost = (event) => {
        event.preventDefault();
        createComment(id, data, getComments, setCommentCounter);
        getComments();
        clear();
    }
    return (

        <form onSubmit={sendPost}>
            <input placeholder="Comentário" value={data.body} onChange={onChange} name="body" />
            <button>Enviar</button>
        </form>

    )
}



