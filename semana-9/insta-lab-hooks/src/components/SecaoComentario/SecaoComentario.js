import React, { useState } from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input`
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {
const [textoComentario, setTextoComentario] = useState("")

	const onChangeComentario = (event) => {
		setTextoComentario(event.target.value)
		console.log(textoComentario)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={textoComentario}
				onChange={onChangeComentario}
			/>
			<button onClick={() => { props.enviarComentario(textoComentario) }} >Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario