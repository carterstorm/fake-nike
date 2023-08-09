import { navigationData } from "../../data";
import {
    Nav,
    NavItem,
    NavLink,
    NavList
} from "./styled";

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