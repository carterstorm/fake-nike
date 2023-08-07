import { NikeLogo } from "../../assets/svg/Nike_Logo";
import { Menu } from "./Menu";
import { Navigation } from "./Navigation";
import { UserOptions } from "./UserOptions";

import {
    Container,
    Header,
    LogoContainer,
    Logo,
} from "./styled";

export const HeaderElement = () => (
    <Container>
        <Menu />
        <Header>
            <LogoContainer>
                <Logo>
                    <NikeLogo />
                </Logo>
            </LogoContainer>
            <Navigation />
            <UserOptions />
        </Header>
    </Container >
);