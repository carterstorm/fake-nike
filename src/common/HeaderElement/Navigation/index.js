import { Nav, NavItem, NavLink, NavList } from "./styled";

const navigationData = [
    { id: 1, name: "Nowe i polecane" },
    { id: 2, name: "Mężczyźni" },
    { id: 3, name: "Kobiety" },
    { id: 4, name: "Dzieci" },
    { id: 5, name: "Wyprzedaż" },
];

export const Navigation = () => {
    return (
        <Nav>
            <NavList>
                {navigationData.map(({ id, name }) => (
                    <NavItem key={id}>
                        <NavLink>{name}</NavLink>
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    );
};