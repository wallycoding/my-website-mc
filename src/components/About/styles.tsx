import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;
    flex-direction: column;
    z-index: 1;
`;

export const CustomShapeDividerTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

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
        fill: #0f0f0f;
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

export const BoxSection = styled.section`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const ImageLayer = styled.div`
    display: flex;
    flex: 0.7;
    justify-content: center;
    @media (max-width: 800px) {
        display: none;
    }
`;

export const Image = styled.img`
    max-width: 250px;
`;

export const Information = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex: 1;
    flex-direction: column;
    background-color: #0f0f0f;
    padding: 10px;
    padding-left: 20px;
    margin: 0 10px;
    border-radius: 0 0.3rem 0.3rem 0;
    box-shadow: inset 3px 0 0 #35bfa6;
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    padding: 5px;
    border-radius: 0.4rem;
    font-family: "Roboto";
    font-size: 2.5rem;
    font-weight: 400;
    color: #35bfa6;
    margin-top: -40px;
    background-color: #131212;
`;
export const Description = styled.p`
    font-family: "Roboto";
    opacity: 0.75;
    margin-top: 20px;
`;
export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    flex-wrap: wrap;
`;

export const Link = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    padding: 1rem 2.5rem;
    border: #35bfa6 solid 1px;
    margin: 5px 10px;
    border-radius: 0.1rem;
    font-family: "Roboto";
    font-weight: 400;
    transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    min-width: 160px;
    :hover {
        transform: scale(1.1);
        font-weight: 500;
        box-shadow: 0 0 5px 0.1px #35bfa6;
        background-color: #35bfa695;
    }
`;
