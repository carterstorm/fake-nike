import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { UserOptions } from "./UserOptions";
import { LogoContainer } from "./LogoContainer";

import {
    Container,
    Header,
} from "./styled";

export const HeaderElement = () => (
    <Container>
        <Menu />
        <Header>
            <LogoContainer />
            <Navigation />
            <UserOptions />
        </Header>
    </Container >
);