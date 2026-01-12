import { createGlobalStyle } from "styled-components";
import Fonts from "../assets/Font/Sensation-Regular.ttf"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "Sensation", Arial, sans-serif;
        src: url(${Fonts}) format('truetype');
        font-weight: 400;
    }

    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: "Sensation", Arial, sans-serif;
        background-color: #ffffff;
        color: #333333;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, nav {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    button {
        font-family: inherit;
    }

    input, textarea {
        font-family: inherit;
    }
`
