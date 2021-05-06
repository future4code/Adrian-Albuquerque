import React from 'react'
import { ImgProduto, P, Div } from '../../styles/styled'

function ProdutoGrid(props) {
    return(
        <Div>
        <ImgProduto src={props.produtoImagem}></ImgProduto>
        <P>{props.mensagem}</P>
        <P>{props.comentario}</P>
        </Div>
    )
}



export default ProdutoGrid;