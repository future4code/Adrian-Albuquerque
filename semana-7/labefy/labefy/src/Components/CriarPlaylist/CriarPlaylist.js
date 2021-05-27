import React from 'react';
import { PlaylistContainer } from '../../Styles/Styled'


export default class CriarPlaylist extends React.Component {
    render() {
        return (
            <PlaylistContainer>
                <p>Criar Playlist</p>
                <input placeholder="Nome da Playlist" onChange={this.props.handlePlaylist} />
                <button onClick={this.props.userCreatePlaylist}>Criar</button>
            </PlaylistContainer>
        )
    }
}