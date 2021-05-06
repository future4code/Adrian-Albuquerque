import React from 'react'
function BotaoNav(props) {
    return(
    <div>
        <img src={props.imagem}/>
        <span> {props.mensagem} </span>
        <img src={props.Chevron}/>
    </div>)
}
export default BotaoNav;