import axios from 'axios'

function GetProfile() {
    const URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person"
    axios.get(URL)
        .then((res => {
            console.log(res.data)
        }))
        .catch((err => {
            console.log(err)
        }))
}
export default GetProfile;