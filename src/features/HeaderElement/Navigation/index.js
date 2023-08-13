import { navigationData } from "../../../data";
import {
    Nav,
    NavItem,
    NavList,
    StyledNavLink
} from "./styled";

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