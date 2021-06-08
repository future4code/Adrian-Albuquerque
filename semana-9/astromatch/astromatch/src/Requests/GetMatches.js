import axios from 'axios';

function GetMatches(props) {
    const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adrian/person"
    let valueReturned = {}
    const requisicao = () => {
        axios.get(URL)
            .then((res => {
                this.setMatches(res.data)
            }))
            .catch((err => {
                return valueReturned = err
            }))
        return valueReturned;
    }
}
export default GetMatches;