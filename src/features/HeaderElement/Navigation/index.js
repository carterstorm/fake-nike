import {
    Nav,
    NavItem,
    NavList,
    StyledNavLink
} from "./styled";

export const navigationData = [
    { id: 1, name: "Nowe i polecane", path: "nowe-i-polecane" },
    { id: 2, name: "Mężczyźni", path: "mezczyzni" },
    { id: 3, name: "Kobiety", path: "kobiety" },
    { id: 4, name: "Dzieci", path: "dzieci" },
    { id: 5, name: "Wyprzedaż", path: "wyprzedaz" },
];

export const Navigation = () => {
    return (
        <Nav>
            <NavList>
                {navigationData.map(({ id, name, path }) => (
                    <NavItem
                        key={id}>
                        <StyledNavLink
                            to={`/${path}`}>
                            {name}
                        </StyledNavLink>
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    );
};