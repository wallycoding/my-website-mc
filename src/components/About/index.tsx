import React from "react";
import {
    Container,
    CustomShapeDividerTop,
    BoxSection,
    ImageLayer,
    Image,
    Information,
    Title,
    Description,
    Links,
    Link,
} from "./styles";
import logoI from "../../assets/svg/undraw_Developer_activity_re_39tg.svg";

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
    anchorId?: string;
}

const About: React.FC<AboutProps> = (props) => {
    return (
        <Container id={props.anchorId}>
            <CustomShapeDividerTop>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </CustomShapeDividerTop>
            <BoxSection>
                <ImageLayer data-animation>
                    <Image src={logoI} alt="logo" />
                </ImageLayer>
                <Information data-animation>
                    <Title>Sobre Mim</Title>
                    <Description>
                        Me chamo Wallyson Breno, mas o pessoal costuma me chamar
                        de Wally, gosto bastante de programação e música, são
                        duas coisas que passo boa parte do meu tempo me
                        divertindo.
                    </Description>
                    <Description>
                        Estudo JavaScript a 4 anos, tenho bastante experiencia
                        em JavaScript e algumas tecnologias como React, React
                        Native, Express, Webpack, Node.js, MongoDB e um pouco de
                        sql com o PostgresSQL usando knex.
                    </Description>
                </Information>
            </BoxSection>
            <BoxSection style={{ flex: "none" }}>
                <Links data-animation>
                    <Link>GitHub</Link>
                    <Link>Instagram</Link>
                    <Link>LinkedIn</Link>
                    <Link>FeciBuki</Link>
                </Links>
            </BoxSection>
        </Container>
    );
};

export default About;
