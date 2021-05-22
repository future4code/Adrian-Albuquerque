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
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }

    }
.astro-img {
    width: 80%;
}

}
main {
    max-width: 100%;
    min-height: 100%;
    grid-column: 2;
    overflow: auto;
    
    .song-section {
        display: flex;
        max-width: 100%;
        min-height: 100%;
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

export const Albums = styled.div`
display: flex;
width: 100%;
text-align: center;
font-family: "DM Sans", sans-serif;

h1 {
    font-size: 2rem;
    color: white;
}

:root {
  --blue: #2d46b9;
  --white: #ffffff;
  --black: #000000;
  --green1: #1ed760;
  --green2: #1db954;
  --gray1: #c1c3c6;
  --gray2: #919496;
  --gray3: #616467;
  --hero-bg-color: #ffc362;
  --hero-terms-link: #efefef;
}
/**********
 * ALBUMS *
 **********/

.albums-cards-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

/* Removes the horizontal scrollbar */
::-webkit-scrollbar {
  display: none;
}

/* Container for the album image and the album info */
.album {
    min-width: 0;
    width: 28%;
    box-sizing: border-box;
    padding: 0.8rem;
    position: relative;
    text-align: center;
    margin: 0 auto;

 img {
  box-shadow: 0.1rem 0.1rem 1.6rem -0.2rem rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}

img:hover {
  cursor: pointer;
}

/* Container for the song title, artist name and play now button */
.album-info {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    justify-content: center;
    opacity: 0;
    margin: 0.8rem;
    transition: all 0.4s ease;
    cursor: pointer;

/* Song title and artist name */
/* This code will avoid text from wrapping to the next line and it will add an ellipsis at the end */

:hover{
    opacity: 5;
    background: rgba(0, 0, 0, 0.8);
}
 h4 {
    margin-top: 0.5rem;
    font-weight: 400;
    letter-spacing: 0.005rem;
}

/* Song title */
 h2 {
  font-size: 2rem;
  color: #919496;
  padding-top: 2rem;
}

/* Artist name */
 h4 {
  font-size: 1.8rem;
  color: #1ed760;
  margin: 0.8rem 0;
}

 h2,
 h4 {
  cursor: pointer;
}

/* Play now button */
 a {
  font-size: 1.3rem;
  color: #919496;
  position: relative;
  bottom: -5rem;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.4s ease;
  :hover {
  color: #1ed760;
}
}
}
}
}

`