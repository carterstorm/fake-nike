import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
   html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        font-family: 'Nunito', sans-serif;
    }
`;