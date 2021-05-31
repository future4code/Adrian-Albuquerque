
import React from 'react'
import { BatContainer } from '../styles/styles'
import BatGif from './giphy.gif'
import BatSong from './batSong.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default class Batman extends React.Component {

    render() {

        return (
            <BatContainer>
                <img src={BatGif} alt="" />
                <ReactAudioPlayer
                    src={BatSong}
                    autoPlay/>


            </BatContainer>
        )
    }
}