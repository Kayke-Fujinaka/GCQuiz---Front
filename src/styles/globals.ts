import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html {
        @media (max-width: ${theme.medias.xl}) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: ${theme.medias.sm}) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        -webkit-font-smoothing: antialiased; 
        scroll-behavior: smooth;
        background: ${theme.colors.grey_50};
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button  {
        cursor: pointer; 
        border: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyle;
