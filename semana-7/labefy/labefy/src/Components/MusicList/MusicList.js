import React from 'react';
export default class MusicList extends React.Component {
    render() {
        return (
            <>
                <div className="playlist-area">
                    <div className="playlist-area__input">
                        <input onChange={this.props.handleName} placeholder="Name" />
                        <input onChange={this.props.handleArtist} placeholder="artist" />
                        <input onChange={this.props.handleUrl} placeholder="url" />
                        <button onClick={this.props.postUserTrackOnPlaylist}>Adicionar</button>
                    </div>

                </div>
                {this.props.SongsOnPlaylist}
            </>
        )
    }
}