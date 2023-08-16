import { ButtonElement } from "../../../../common/ButtonElement";
import {
    Container,
    Heading,
    LinksContainer,
    Section,
    SubTitle,
    // Title
} from "./styled";

export const ThematicSection = () => (
    <Section>
        <Container>
            {/* <Title></Title> */}
            <Heading>Razem na starcie</Heading>
            <SubTitle>Niezawodne produkty na mocny powrót do szkoły.</SubTitle>
            <LinksContainer>
                <ButtonElement>Kup produkty dla dzieci</ButtonElement>
                <ButtonElement>Przeglądaj wszystko</ButtonElement>
            </LinksContainer>
        </Container>
    </Section>
);