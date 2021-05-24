import styled from "styled-components";
import PlanoDeFundo from '../img/bg.jpg'

export const Main = styled.div`
width: 100vw;
height: 100vh;
background-image: linear-gradient(#222, #333);
display: grid;
grid-template-columns: 200px 1fr;
grid-template-rows: 80px 1fr 80px;

header {
grid-row: 1;
grid-column: 1 / span -1;
display: flex;
align-items: center;
justify-content: flex-end;
width: 100%;


.user-info {
display: flex;
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

    .biblioteca-h1 {
        align-items: center;
        text-align: center;
        font-size: 2rem;
        color: white;
        font-family: "DM Sans", sans-serif;
    }
    
    .song-section {
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
    .playlist-area{
       margin: 0 auto;
       .playlist-area__input{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 auto;
        width: 80%;

        input {
            background: none;
            /* margin: none; */
            opacity: 1;
            color: white;
            padding: 5px;
            
        }
        button {
            padding: 5px;
            background: none;
            color: white;
            text-transform: uppercase;
            border-radius: 10px;
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
font-family: "DM Sans", sans-serif;
display: flex;
flex-wrap: wrap;
align-items: center;
text-align: center;

.albums-cards-container {
    flex-wrap: wrap;
    overflow: auto;
    padding: 5rem 0;
  }

  .album {
    min-width: 0;
    width: 33.33%;
    box-sizing: border-box;
    padding: 0.8rem;
    position: relative;
  
  img {
    width: 100%;
  box-shadow: 0.1rem 0.1rem 1.6rem -0.2rem rgba(0, 0, 0, 0.3);
  }

  .album-info{
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

h2 {
    margin-top: 1rem;
    font-weight: 400;
    letter-spacing: 0.005rem;
  }
  

  a {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.4s ease;
  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  
  }

  :hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);

  h2 {
    color: #fff;
    white-space: normal;
    overflow: initial;
    text-overflow: initial;
  }
  a {
      :hover {
        color: #1db954; 
      }
     
  }
  }
  
  }
  }
`

export const PlaylistContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
export const MusicasDiv = styled.div`
display: flex;
justify-content: space-between;
`

export const Login = styled.div`
background: url(${PlanoDeFundo}) no-repeat;
background-size: cover;
height: 100vh;
opacity: .9;

.login-area {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 280px;
    transform: translate(-50%, -50%);
    color: white;

    h1{
        float: left;
        font-size: 40px;
        border-bottom: 6px solid #4caf50;
        margin-bottom: 50px;
        padding: 13px 0;
    }
    .text-box {
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding: 8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #4caf50;

        img {
            width: 16px;
            float: left;
            text-align: center;
        }
        input {
            border: none;
            outline: none;
            background: none;
            color: white;
            font-size: 18px;
            width: 80%;
            float: left;
            margin: 0 10px;
        }
}
        button {
            width: 100%;
            background: none;
            border: 2px solid #4caf50;
            color: white;
            padding: 5px;
            font-size: 18px;
            cursor: pointer;
            margin: 12px 0;

        }

}
`