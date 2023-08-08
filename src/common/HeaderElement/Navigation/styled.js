import { styled } from "styled-components";

export const Nav = styled.nav``;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0 0 0 175px;
    margin: 0;
    font-weight: 600;
`;

export const NavItem = styled.li`
    @media (max-width: 1200px) {
        &:nth-last-child(1) {
            display: none;
        }
    }
`;

export const NavLink = styled.a`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 15px;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid black;
    };
`;