import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetMatches from '../../Requests/GetMatches';
import GetProfile from '../../Requests/GetProfile';
import Header from '../Header/Header';
import './AppContainer.scss';
import MatchList from '../MatchList/MatchList';
import ClearMatch from '../ClearMatch/ClearMatch';

function AppContainer() {
    const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adrian';
    const [matches, setMatches] = useState([]);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        GetMatches();
    }, [])

    const changeDisplay = () => {
        setDisplay(!display)
    }

    const GetMatches = () => {
        const URL = `${BASE_URL}/person`
        axios.get(URL)
            .then((res => {
                setMatches(res.data.profile)
            }))
            .catch((err => {
                setMatches(err)
            }))
    }

    const ChooseMatch = (match) => {
        const Header = {
            'Content-Type': 'application/json'
        }
        const body = (id, validation) => {
            return { id: id, choice: validation }
        }
        axios.post
            (`${BASE_URL}/choose-person`, body(matches.id, match), Header)
            .then((res => {
                console.log(res)
                if (res.data.isMatch) {
                    alert('Match Realizado')
                } else {
                    alert('deslike')
                }
                GetMatches()
            }))
            .catch((err => {
                console.log(err)
            }))

    }

    const clone = [matches]
    const matchMap = clone.map((person => {
        return (
            <div key={person.id} className="person-container">
                <div className="info-container">
                    <img src={person.photo} alt="people" className="img-people" />
                </div>
                <p>{person.name}, {person.age}</p>
                <p>{person.bio}</p>
                <div className="botoes">
                    <button onClick={() => ChooseMatch(true)}>X</button>
                    <button onClick={() => ChooseMatch(false)}>Heart</button>
                </div>
            </div>)
    }))


    return (
        <div className="main-container">
            <div>
                <Header changeDisplay={changeDisplay} />
                {display === true ? matchMap : <MatchList />}
                <ClearMatch GetMatches={changeDisplay} />
            </div>
        </div>
    )
}
export default AppContainer;