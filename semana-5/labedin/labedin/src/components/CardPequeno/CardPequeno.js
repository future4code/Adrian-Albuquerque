import React from 'react'
import './cardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="cardPequeno">
            <img src={props.imagem}/>
            <p>{props.email}</p>
        </div>)
}
export default CardPequeno