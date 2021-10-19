import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
    @media (max-width: 740px) {
        flex-direction: column-reverse;
    }
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
        width: calc(169% + 1.3px);
        height: 110px;
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

export const BoxSection = styled("section")<{ inferiorizeMediaFlex?: number }>`
    display: flex;
    flex: 1;
    flex-direction: column;
    * {
        z-index: 2;
    }
    @media (max-width: 740px) {
        flex: ${(props) => props.inferiorizeMediaFlex || "1"};
    }
`;

export const Form = styled.form`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputLayer = styled.div`
    display: flex;
    width: 90%;
    margin: 5px 0;
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    background-color: #0f0f0f;
    border-radius: 0.3rem;
    outline: none;
    font-family: "Roboto";
    font-size: 1rem;
`;

export const InputLine = styled.textarea`
    width: 100%;
    padding: 14px 16px;
    background-color: #0f0f0f;
    border-radius: 0.3rem;
    outline: none;
    font-family: "Roboto";
    font-size: 1rem;
    resize: none;
`;

export const ButtonLayer = styled.div`
    display: flex;
    width: 90%;
    margin: 5px 0;
`;

export const Button = styled.button`
    display: flex;
    width: 100%;
    font-family: "Roboto";
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: white;
    padding: 14px 16px;
    border-radius: 0.3rem;
    font-weight: 600;
    color: #0e0d0d;
`;

export const Information = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
    width: 90%;
    margin-top: 150px;
    @media (max-width: 740px) {
        flex: 1;
        margin: 0 auto;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    position: relative;
    font-family: "Roboto";
    font-size: 2rem;
    color: #35bfa6;
    ::before {
        display: block;
        width: 20px;
        height: 20px;
        position: absolute;
        content: "";
        top: 10px;
        right: 0;
        background-color: #35bfa6;
        border-radius: 100%;
        @media (max-width: 400px) {
            display: none;
        }
    }
`;

export const Description = styled.p`
    font-family: "Roboto";
    opacity: 0.75;
    margin-top: 20px;
`;

export const ImageLayer = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-end;
    top: 50%;
    transform: translateY(-30%);
    right: 0;
    z-index: -1;
    * {
        z-index: -1;
        opacity: 0.4;
    }
    @media (max-width: 740px) {
        display: none;
    }
`;

export const Image = styled.img`
    max-width: 400px;
`;
