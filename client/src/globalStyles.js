import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html, #root, .app {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    

    
`;

export default GlobalStyle;
