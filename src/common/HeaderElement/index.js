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