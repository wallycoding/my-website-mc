import React from "react";
import {
    Container,
    CustomShapeDividerTop,
    CustomShapeDividerBottom,
    BoxSection,
    Form,
    InputLayer,
    Input,
    InputLine,
    ButtonLayer,
    Button,
    Information,
    Title,
    Description,
    ImageLayer,
    Image,
} from "./styles";
import logoI from "../../assets/svg/undraw_New_message_re_fp03.svg";

interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
    anchorId?: string;
}

const Contact: React.FC<ContactProps> = (props) => {
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
            <CustomShapeDividerBottom>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200 0L0 0 598.97 114.72 1200 0z"
                        className="shape-fill"
                    ></path>
                </svg>
            </CustomShapeDividerBottom>
            <BoxSection>
                <Form
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                    data-animation
                >
                    <InputLayer>
                        <Input placeholder="Nome" />
                    </InputLayer>
                    <InputLayer>
                        <Input placeholder="Número" />
                    </InputLayer>
                    <InputLayer>
                        <InputLine rows={4} placeholder="Descrição" />
                    </InputLayer>
                    <ButtonLayer>
                        <Button>Enviar Formulario</Button>
                    </ButtonLayer>
                </Form>
            </BoxSection>
            <BoxSection inferiorizeMediaFlex={0.5}>
                <ImageLayer data-animation>
                    <Image src={logoI} alt="logo" />
                </ImageLayer>
                <Information data-animation>
                    <Title>Formulario de contato</Title>
                    <Description>Este é o formulário de contato para podermos prestar algum serviço ou negociação sobre a criação de um site, até mesmo desenvolvimento de projetos sobe cotação e contratação.</Description>
                </Information>
            </BoxSection>
        </Container>
    );
};

export default Contact;
