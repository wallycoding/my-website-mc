import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    background-color: #0f0f0f;
    display: flex;
    height: 100vh;
    z-index: 1;
    flex-direction: column;
`;

export const Top = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const Tab = styled.div`
    display: flex;
    margin-bottom: 20px;
`;
export const TabName = styled.h1`
    display: flex;
    width: 90%;
    margin: 0 auto;
    position: relative;
    color: #35bfa6;
    font-family: "roboto";
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
export const Technologies = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    * {
        -webkit-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }
`;

export const Technology = styled.div`
    position: relative;
    display: flex;
    margin: 5px;
    margin-top: 45px;
`;

export const TechBox = styled.div`
    display: flex;
    background-color: #0a0a0a;
    padding: 25px 30px;
    border-radius: 0.3rem;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        padding: 20px 25px;
    }
`;

export const TechImage = styled.img`
    display: flex;
    max-width: 60px;
    @media (max-width: 500px) {
        max-width: 40px;
    }
`;

export const TechName = styled.span`
    font-family: "roboto";
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: calc(100% + 10px);
    background-color: #0a0a0a;
    padding: 5px;
    border-radius: 0.3rem;
`;

export const Bottom = styled.div`
    display: flex;
    flex: 0.4;
    background-color: #0a0a0a;
    border-radius: 1rem 1rem 0 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: "roboto";
`;

export const CopyRight = styled.span`
    display: flex;
    font-family: "roboto";
    margin-top: 10px;
    font-size: 1.2rem;
`;
