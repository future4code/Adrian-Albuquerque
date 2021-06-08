import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import './MatchList.scss'

function MatchList(props) {

    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        listaDeMatches();
    }, [])

    const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adrian';

    const listaDeMatches = async () => {
        const request = await axios.get(`${BASE_URL}/matches`)
            .then(res => {
                setMatchList(res.data.matches)
            })
            .then(err => {
                console.log(err)
            })
        return request;
    }

    const matchesMap = matchList.map(item => {
        return (
            <div key={item.id} className="item">
                <p>{item.name}</p>
                <img src={item.photo} alt="" />
            </div>
        )
    })
    return (
        <div className="match-container">

            <div className="lista-de-matches">
                <Header changeDisplay={props.changeDisplay} />
                <div className="person-container pessoas">
                    {matchesMap}
                </div>
            </div>


        </div>
    )
}
export default MatchList;