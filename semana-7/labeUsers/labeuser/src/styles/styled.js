import styled from 'styled-components'
import PlanoDeFundo from '../img/bg.jpg'

export const MainContainer = styled.div`
background: url(${PlanoDeFundo}) no-repeat;
background-size: cover;
height: 100vh;
opacity: .9;

.lista-container {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
width: 100%;
height: 100%;

    .lista-de-usuarios {
        grid-column: 2;
        grid-row: 2;
        width: 100%;
        height: 100%;
        ul {
            margin: 10px;
            color: white;
            font-size: 18pt;
            list-style: none;
            text-align: center;
            line-height: 1.3;
            h1 {
                font-size: 5rem;
                margin: 5px 0;
            }
        }
}
}
`
export const HomeContainer = styled.div`
@import "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
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
