import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body, html, .App, #root {
        width: 100%;
        height: 100%;
    }

    body, .App, #root{
        background: linear-gradient(180deg, #fafafa, #e8e8e8);
        display:flex;
        justify-content: center;
        align-items: center;
 }

`;
