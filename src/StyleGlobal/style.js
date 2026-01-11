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

    body {
        height: 100%;
        font-family: "Sensation";
    }

    a {
        text-decoration: none;
    }

    ul, nav {
        list-style-type: none;
    }
`
