import React from 'react';
export default class MusicList extends React.Component {
    render() {
        return (
            <>
                <div className="playlist-area">
                    <div className="playlist-area__input">
                        <input onChange={this.props.handleName} placeholder="Nome da Musica" />
                        <input onChange={this.props.handleArtist} placeholder="Artista" />
                        <input onChange={this.props.handleUrl} placeholder="Link" />
                        <button onClick={this.props.postUserTrackOnPlaylist}>Adicionar</button>
                    </div>

                </div>
                {this.props.SongsOnPlaylist}
            </>
        )
    }
}