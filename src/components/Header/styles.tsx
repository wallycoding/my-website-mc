import styled, { keyframes } from "styled-components";

export const Container = styled.header`
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(130deg, #568df3, #4d5dec);
    z-index: 1;
`;

export const CustomShapeDividerBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    & svg {
        position: relative;
        display: block;
        width: calc(108% + 1.3px);
        height: 138px;
    }

    & .shape-fill {
        fill: #e4e7e4;
    }

    /** For mobile devices **/
    @media (max-width: 767px) {
        & svg {
            width: calc(196% + 1.3px);
            height: 104px;
        }
    }

    z-index: 2;
`;

export const Box = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 780px;
    z-index: 2;
    margin-top: -5%;
    @media (max-width: 610px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    max-height: 200px;
    height: 100%;
    margin: 0 10px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FieldDetail = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    @media (max-width: 610px) {
        margin: 10px;
        width: calc(100% - 20px);
    }
`;

export const Title = styled.h1`
    font-family: "Roboto";
    color: white;
    font-weight: 600;
    font-size: 4rem;
    opacity: 0.7;
    @media (max-width: 875px) {
        font-size: 3rem;
    }
    @media (max-width: 610px) {
        font-size: 2.2rem;
    }
`;

export const Description = styled.p`
    display: flex;
    font-family: "Roboto";
    color: white;
    font-weight: 300;
    font-size: 1rem;
    word-break: break-all;
`;

export const Buttons = styled.div`
    display: flex;
    margin: 10px 0;
    width: 95%;
    justify-content: flex-end;
    z-index: 2;
`;

export const Button = styled.button`
    display: flex;
    padding: 10px 15px;
    background-color: #eef0ed;
    color: #0a0a0a;
    border-radius: 0.1rem;
    font-size: 1rem;
    font-weight: 900;
    margin: 0 5px;
    &:hover {
        background-color: white;
    }
`;

const arrowContentAnimation = keyframes`
  0% {
    transform: translate(50%, 0);
  }
  50% {
    transform: translate(50%, 10px);
    opacity: 0.1;
  }
  100% {
    transform: translate(50%, 0);
  }
`;

export const ArrowContent = styled.div`
    position: absolute;
    display: none;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    font-size: 3rem;
    animation: ${arrowContentAnimation} infinite 0.8s;
    z-index: 10;
    @media (max-width: 875px) {
        right: 50px;
        transform: translateX(0);
    }

    & svg * {
        color: black;
    }
`;
