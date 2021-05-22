import styled from "styled-components";

export const Main = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(#222, #333);
display: grid;
grid-template-columns: 200px 1fr;
grid-template-rows: 80px 1fr 80px;

header {
/* background-color: yellow; */
grid-row: 1;
grid-column: 1 / span -1;
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;


.user-info {
display: flex;
/* color: white; */
width: 115px;
padding: 5px;
margin-right: 1vw;
align-items: center;
background-color: #ccc;
border-radius: 12px;
font-size: 0.8rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
justify-content: space-between;

h3 {
    margin: 0 5px;
    color: white;
}
.user-info-left_side {
    display: flex;
    align-items: center;
}
    img {
        :first-child {
        border-radius: 50%;
        margin-right: 5px;
        }
        width: 1.2rem;
        height: 1.2rem;
    }

}
}

.left-side {
    grid-column: 1;
    grid-row: 1 / span 2;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        width: 90%;
        margin: 5px auto;
        border-radius: 10px;
        background-color: #282828;
        padding: 5px;
        display: flex;
        align-items: center;
    }
.astro-img {
    width: 80%;
}

}
main {
    width: 100%;
    max-height: 100%;
    grid-column: 2;
    overflow: auto;
    .song-section {
        display: flex;
        width: 100%;
     

        li {
            width: 100%;
        }
        audio {
            width: 100%;
        }
    }
    .div-in-map {
        margin: 15px auto;
        padding: 5px;
        border-radius: 10px;
        background-color: yellow;
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center; 
        flex-direction: row;

        img {
            width: 5rem;
            border-radius: 50%;
        }
        .left-section {
            text-align: center;
            display: flex;
            align-items: center;
            .text-align {
                text-align: center;
            }
        }
    }
}
footer {
    background-color: red;
    grid-column: 1 / span 3;
    text-align: center;
}
`

export const Home = styled.div`
`