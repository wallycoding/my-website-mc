import React, { useRef } from "react";
import { Container } from "./styles";
import Header from "../Header";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";

const Page: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <Container ref={containerRef}>
            <Header />
            <About anchorId="about-me" />
            <Contact anchorId="contact-me" />
            <Footer />
        </Container>
    );
};

export default Page;
