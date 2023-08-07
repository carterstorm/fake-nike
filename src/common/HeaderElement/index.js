import { JordanLogo } from "../../assets/svg/Jordan_Logo";
import { NikeLogo } from "../../assets/svg/Nike_Logo";

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
    Navigation,
    NavigationList,
    NavigationItem,
    NavigationLink,
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

const navigationData = [
    { id: 1, name: "Nowe i polecane" },
    { id: 2, name: "Mężczyźni" },
    { id: 3, name: "Kobiety" },
    { id: 4, name: "Dzieci" },
    { id: 5, name: "Wyprzedaż" },
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
            <Navigation>
                <NavigationList>
                    {navigationData.map(({ id, name }) => (
                        <NavigationItem key={id}>
                            <NavigationLink>{name}</NavigationLink>
                        </NavigationItem>
                    ))}
                </NavigationList>
            </Navigation>

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