import { JordanLogo } from "../../assets/svg/Jordan_Logo";
import { NikeLogo } from "../../assets/svg/Nike_Logo";
import { Navigation } from "./Navigation";

import {
    DesktopMenu,
    Container,
    Header,
    UserMenuList,
    BrandContainer,
    Brand,
    UserMenuItem,
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

const userMenuData = [
    { id: 1, title: "Znajdź sklep" },
    { id: 2, title: "Pomoc" },
    { id: 3, title: "Dołącz do nas" },
    { id: 4, title: "Zaloguj się" },
];

export const HeaderElement = () => (
    <Container>
        <DesktopMenu>
            <BrandContainer>
                <Brand>
                    <JordanLogo />
                </Brand>
            </BrandContainer>
            <UserMenuList>
                {userMenuData.map(({ id, title }) => (
                    <UserMenuItem key={id}>
                        {title}
                    </UserMenuItem>
                ))}
            </UserMenuList>
        </DesktopMenu>
        <Header>
            <LogoContainer>
                <Logo>
                    <NikeLogo />
                </Logo>
            </LogoContainer>
            <Navigation></Navigation>

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