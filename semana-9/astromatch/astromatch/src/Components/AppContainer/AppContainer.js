import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GetMatches from '../../Requests/GetMatches';
import GetProfile from '../../Requests/GetProfile'
import Header from '../Header/Header'
import './AppContainer.scss'

function AppContainer() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        requisicao()
    }, [])

    const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adrian/person"

    const requisicao = () => {
        axios.get(URL)
            .then((res => {
                setMatches(res.data.profile)
            }))
            .catch((err => {
                setMatches(err)
            }))
    }
    const clone = [matches]
    const matchMap = clone.map((person => {
        return (
            <div key={person.id} className="person-container">
                <div className="info-container">
                    <img src={person.photo} alt="people" />
                </div>
                <p>{person.name}, {person.age}</p>
                <p>{person.bio}</p>
                <div className="botoes">
                    <button>X</button>
                    <button>Heart</button>
                </div>

            </div>)
    }))
    console.log(matches)
    return (
        <div className="main-container">
            {/* <Header /> */}
            {matchMap}
        </div>)
}
export default AppContainer;