import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './ClearMatch.scss'


function ClearMatch(props) {
    const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adrian';
    const Header = {
        'Content-Type': 'application/json'
    };
    const clear = () => {
        axios.put(`${BASE_URL}/clear`, Header)
            .then((res => {
                alert("Histórico limpo com sucesso !")
                props.GetMatches();
            }
            ))
            .catch((err => {
                alert("Ocorreu um erro, tente novamente")
            }
            ))
    }
    return (
        <div className="clear">
            <Button onClick={clear} color="primary" variant="contained">clear</Button>
        </div>
    )
}
export default ClearMatch;