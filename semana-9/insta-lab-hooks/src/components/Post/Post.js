import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtida, setCurtida] = useState(false);
  const [comentarios, setComentarios] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [listaComentarios, setListaComentarios] = useState([])
  const [numeroComentarios, setNumeroComentarios] =
    useState(0)

  const onClickCurtida = () => {
    if (curtida) {
      setCurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtida(!curtida)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentarios(!comentarios)
  };

  const enviarComentario = (comentario) => {
    setListaComentarios([...listaComentarios, comentario])
    setComentarios(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(listaComentarios)
  }

  const caixaComentario = comentarios ? (
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (listaComentarios.map((comment => {
    return <CommentContainer>
      <p>{comment}</p>
    </CommentContainer>
  })))
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={curtida ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaComentario}
    </PostContainer>
  )
}

export default Post