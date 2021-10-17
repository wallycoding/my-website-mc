import React from "react";
import {
    Container,
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
                    <Description>
                        William Henry Gates III, mais conhecido como Bill Gates,
                        é um magnata, empresário, diretor executivo, investidor,
                        filantropo e autor americano, que ficou conhecido por
                        fundar, junto com Paul Allen a Microsoft, a maior e mais
                        conhecida empresa de software do mundo em termos de
                        valor de mercado.
                    </Description>
                </Information>
            </BoxSection>
        </Container>
    );
};

export default Contact;
