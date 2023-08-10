import { styled } from "styled-components";

export const NavList = styled.ul`
    list-style: none;
    margin: 0 0 30px 0;
    padding: 0;
`;

export const NavItem = styled.li`
`;

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const NavButtonText = styled.p`
    display: flex;
    width: 236px;
    margin: 0;
    font-weight: 500;
    font-size: 24px;
`;

export const NavButtonIcon = styled.img`
    width: 24px;
`;