import {
    Container,
    ReadMore,
    Paragraph,
    Buttons,
    Button,
    Text,
    JoinUsButton
} from "./styled";

export const Membership = () => (
    <Container>
        <Paragraph>
            Zostań członkiem Nike i uzyskaj dostęp do najlepszych sportowych produktów, inspiracji i historii.
            <ReadMore> Dowiedz się więcej.</ReadMore>
        </Paragraph>
        <Buttons>
            <JoinUsButton>
                <Text>Dołącz do nas</Text>
            </JoinUsButton>
            <Button>
                <Text>Zaloguj się</Text>
            </Button>
        </Buttons>
    </Container>
);