import { styled } from "styled-components";

export const Nav = styled.nav``;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0 0 0 150px;
    margin: 0;
    font-weight: 500;
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 12px;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid black;
    };
`;