import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #fff;
    }

    * button, * input, * textarea {
        background: none;
        border: none;
    }

    * button, * a {
        cursor: pointer;
    }

    * button:disabled {
        cursor: default;
    }

    * img {
        -webkit-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }

    body {
        background-color: #0a0a0a;
    }

    @media (min-width: 767px) {
        *::-webkit-scrollbar {
            width: 8px;
            background: #0c0c0c;
            
            
        }
        *::-webkit-scrollbar-thumb {
            width: 8px;
            background: #525151;
            border-radius: 50px;
            
        }
    }

`;

export default GlobalStyles;
