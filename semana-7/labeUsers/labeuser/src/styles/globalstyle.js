import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
padding: 0;
margin: 0;
box-sizing: border-box;
}
html {
    max-width: 100vw;
    min-height: 100vh;
    font-size: 62.5%;
}
body, #root {
    width: 100%;
    height: 100%;
}


`