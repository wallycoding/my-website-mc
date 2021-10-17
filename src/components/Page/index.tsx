import React, { useEffect, useRef } from "react";
import { Container } from "./styles";
import Header from "../Header";
import About from "../About";
import Contact from "../Contact";

const Page: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleWithScrolling = (element: Element | null) => {
        const queryAll = () =>
            Array.from(window.document.querySelectorAll("[data-animation]")).reverse();

        const isElementInScreen = (childElement: Element) => {
            const rect = childElement.getBoundingClientRect();
            const clientHeight = element!!.clientHeight;

            return (
                (rect.top <= 0 && rect.bottom >= 0) ||
                (rect.bottom >= clientHeight && rect.top <= clientHeight) ||
                (rect.top >= 0 && rect.bottom <= clientHeight)
            );
        };

        return () => {
            queryAll().forEach((element, i) => {
                setTimeout(
                    () =>
                        element.setAttribute(
                            "data-animation",
                            isElementInScreen(element) ? "on" : "off"
                        ),
                    100 * i
                );
            });
        };
    };

    useEffect(() => {
        const element = containerRef!!.current;
        const onScroll = handleWithScrolling(element);

        if (element) {
            element.addEventListener("scroll", onScroll);
        }
        return () => {
            if (element) {
                element.removeEventListener("scroll", onScroll);
            }
        };
    }, []);

    return (
        <Container ref={containerRef}>
            <Header />
            <About anchorId="about-me" />
            <Contact />
        </Container>
    );
};

export default Page;
