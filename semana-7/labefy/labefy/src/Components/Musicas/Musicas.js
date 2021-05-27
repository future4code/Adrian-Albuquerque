import React from 'react'
import {MusicasDiv} from '../../Styles/Styled'

export default class Musicas extends React.Component{
    render(){
        return(
            <MusicasDiv>
                <h1>Hello World</h1>
                {this.props.Music}
            </MusicasDiv>
        )
    }
}