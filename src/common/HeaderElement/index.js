import { NikeLogo } from "../../assets/svg/Nike_Logo";
import { Menu } from "../DesktopMenu";
import { Navigation } from "./Navigation";

import {
    Container,
    Header,
    LogoContainer,
    Logo,
    UserOptions,
    SearchBox,
    Button,
    SearchInput,
    ButtonsList,
    ButtonsItem,
    SearchButton,
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

            <UserOptions>
                <SearchBox>
                    <SearchButton></SearchButton>
                    <SearchInput placeholder="Wyszukaj" />
                </SearchBox>
                <ButtonsList>
                    <ButtonsItem>
                        <Button></Button>
                    </ButtonsItem>
                    <ButtonsItem>
                        <Button></Button>
                    </ButtonsItem>
                </ButtonsList>
            </UserOptions>
        </Header>
    </Container >
);