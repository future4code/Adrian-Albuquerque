import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './AppContainer.scss';
import MatchList from '../MatchList/MatchList';
import ClearMatch from '../ClearMatch/ClearMatch';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
                GetMatches();
            }))
            .catch((err => {
                alert(err)
            }))

    }

    const clone = [matches]
    const matchMap = clone.map((person => {
        return (
            <div key={person.id} className="person-container">
                <div className="info-container">

                    <Header changeDisplay={changeDisplay} />
                    <img src={person.photo} alt="people" className="img-people" />
                </div>
                <p>{person.name}, {person.age}</p>
                <p>{person.bio}</p>
                <div className="botoes">
                    <div style={{ cursor: "pointer" }}>
                        <FavoriteIcon onClick={() => ChooseMatch(true)} fontSize="large" color="secondary" />
                    </div>


                    <div style={{ cursor: "pointer" }}>
                        <CancelOutlinedIcon color="secondary" fontSize="large" onClick={() => ChooseMatch(false)}></CancelOutlinedIcon>
                    </div>

                </div>
            </div >
        )
    }))


    return (
        <div className="main-container">
            {display === true ? matchMap : <MatchList changeDisplay={changeDisplay} />}
            <ClearMatch GetMatches={changeDisplay} />
        </div>
    )
}
export default AppContainer;