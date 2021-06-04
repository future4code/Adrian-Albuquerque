import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './MatchList.scss'

function MatchList() {

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
        console.log(item)
        return (
            <div key={item.id} className="lista-de-matches">
                <p>{item.name}</p>
                <img src={item.photo} alt="" />
            </div>
        )
    })
    return (
        <div className="match-container">
            <h1>Oi, eu sou o match list !</h1>
            {matchesMap}
        </div>
    )
}
export default MatchList;