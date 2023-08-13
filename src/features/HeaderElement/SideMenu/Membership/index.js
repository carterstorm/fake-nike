import { ButtonElement } from "../../../../common/ButtonElement";
import { Login } from "../../../../common/ButtonElement/styled";
import {
    Container,
    ReadMore,
    Paragraph,
    Buttons,
} from "./styled";

export const Membership = () => (
    <Container>
        <Paragraph>
            Zostań członkiem Nike i uzyskaj dostęp do najlepszych sportowych produktów, inspiracji i historii.
            <ReadMore> Dowiedz się więcej.</ReadMore>
        </Paragraph>
        <Buttons>
            <ButtonElement>
                Dołącz do nas
            </ButtonElement>
            <Login>
                Zaloguj się
            </Login>
        </Buttons>
    </Container>
);