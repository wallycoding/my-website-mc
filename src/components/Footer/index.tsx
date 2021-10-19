import React from "react";
import {
    Container,
    Top,
    Tab,
    TabName,
    Technologies,
    Technology,
    TechBox,
    TechImage,
    TechName,
    Bottom,
    Title,
    CopyRight,
} from "./styles";

import iconReact from "../../assets/technologies/react.svg";
import iconNodejs from "../../assets/technologies/node-js.svg";
import iconRn from "../../assets/technologies/rn.svg";
import iconWebpack from "../../assets/technologies/webpack.svg";

import iconJs from "../../assets/technologies/js.svg";
import iconTs from "../../assets/technologies/ts.svg";

const Footer: React.FC = () => {
    const allTechnologies = [
        { icon: iconReact, name: "React" },
        { icon: iconNodejs, name: "NodeJs" },
        { icon: iconRn, name: "RN" },
        { icon: iconWebpack, name: "Webpack" },
        { icon: iconJs, name: "JavaScript" },
        { icon: iconTs, name: "TypeScript" },
    ];

    return (
        <Container>
            <Top>
                <Tab>
                    <TabName>Tecnologias que uso</TabName>
                </Tab>
                <Technologies>
                    {allTechnologies.map((technology, i) => {
                        return (
                            <Technology key={i}>
                                <TechBox>
                                    <TechImage src={technology.icon} />
                                </TechBox>
                                <TechName>{technology.name}</TechName>
                            </Technology>
                        );
                    })}
                </Technologies>
            </Top>
            <Bottom>
                <Title>
                    Desenvolvido em{" "}
                    <span style={{ color: "#377acd" }}>TS</span> 👨‍💻
                </Title>
                <CopyRight style={{ opacity: 0.75 }}>
                    Feito por wallycoding
                </CopyRight>
            </Bottom>
        </Container>
    );
};

export default Footer;
