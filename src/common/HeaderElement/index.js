import { JordanLogo } from "../../assets/svg/Jordan_Logo";

import {
    DesktopMenu,
    Container,
    // Header,
    UserMenuList,
    BrandContainer,
    Brand,
    UserMenuItem,
    // LogoContainer,
    // Logo,
    // Navigation,
    // NavigationList,
    // NavigationItem,
} from "./styled";

export const HeaderElement = () => (
    <Container>
        <DesktopMenu>
            <BrandContainer>
                <Brand>
                    <JordanLogo />
                </Brand>
            </BrandContainer>
            <UserMenuList>
                <UserMenuItem>
                    Znajdź sklep
                </UserMenuItem>
                <UserMenuItem>
                    Pomoc
                </UserMenuItem>
                <UserMenuItem>
                    Dołącz do nas
                </UserMenuItem>
                <UserMenuItem>
                    Zaloguj się
                </UserMenuItem>
            </UserMenuList>
        </DesktopMenu>
        {/* <Header>
            <LogoContainer>
                <Logo></Logo>
            </LogoContainer>
            <Navigation>
                <NavigationList>
                    <NavigationItem>Nowe i polecane</NavigationItem>
                    <NavigationItem>Mężczyźni</NavigationItem>
                    <NavigationItem>Kobiety</NavigationItem>
                    <NavigationItem>Dzieci</NavigationItem>
                    <NavigationItem>Wyprzedaż</NavigationItem>
                </NavigationList>
            </Navigation>
        </Header> */}
    </Container >
);