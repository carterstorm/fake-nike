import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
    @media (max-width: 960px) {
        display: none;
    }
`;

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

    @media (max-width: 1100px) {
        &:nth-last-child(2) {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        &:nth-last-child(3) {
            display: none;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    height: 58px;
    padding: 0 15px;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid black;
    };
`;