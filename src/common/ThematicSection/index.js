import { ButtonElement } from "../ButtonElement";
import {
    Container,
    Heading,
    LinksContainer,
    Section,
    SubTitle,
    // Title
} from "./styled";

export const ThematicSection = ({ heading, subtitle, firstButtonText, secondButtonText }) => (
    <Section>
        <Container>
            {/* <Title></Title> */}
            <Heading>{heading}</Heading>
            <SubTitle>{subtitle}</SubTitle>
            <LinksContainer>
                <ButtonElement>{firstButtonText}</ButtonElement>
                <ButtonElement>{secondButtonText}</ButtonElement>
            </LinksContainer>
        </Container>
    </Section>
);