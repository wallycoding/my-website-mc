import { createGlobalStyle, keyframes } from "styled-components";

const fadein = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    50% {
        opacity: 0.1;
    }
    100% {
        opacity: default;
        transform: default;
    }
`;

const fadeout = keyframes`
    to {
        opacity: 0;
        transform: translateY(-100px);
    }
`;

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


    [data-animation] {
        opacity: 0
    }
    [data-animation="on"] {
        animation: ${fadein} 0.8s linear;
        opacity: 1;
    }
    [data-animation="off"] {
        animation: linear ${fadeout} 0.8s;
    }

`;

export default GlobalStyles;
