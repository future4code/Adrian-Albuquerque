import React from 'react';
import { Albums } from '../../Styles/Styled';
import AstroDev from '../../img/song-logo.png'
export default class Biblioteca extends React.Component {
    render() {
        return (
            <Albums>

                <section class="albums">
                    <h1>SUA PLAYLST</h1>
                    <div class="albums-container">
                        <div class="albums-cards-container">
                            {/* <!-- Travis Scott --> */}
                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>FRANCHISE </h2>
                                    <h4>Travis Scott</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>

                            {/* <!-- ZAYN --> */}


                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>Better</h2>
                                    <h4>ZAYN</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>
                            {/* <!-- Joji --> */}
                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>Nectar</h2>
                                    <h4>Joji</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>
                            {/* <!-- Jennifer Lopez --> */}
                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>Pa Ti + Lonely</h2>
                                    <h4>Jennifer Lopez</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>
                            {/* <!-- Machine Gun Kelly --> */}
                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>Tickets To My Downfall</h2>
                                    <h4>Machine Gun Kelly</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>
                            {/* <!-- Cold --> */}
                            <div class="album">
                                <img src={AstroDev} alt="" />
                                <div class="album-info">
                                    <h2>Cold</h2>
                                    <h4>Chris Stapleton</h4>
                                    <a href="#">PLAY NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Albums>
        )
    }
}