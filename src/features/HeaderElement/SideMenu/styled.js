import { styled } from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 0;
    right: ${({ hide }) => hide ? "0" : "-320px"};
    width: 320px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    transition: .25s;
`;

export const CloseButtonContainer = styled.div`
    height: 60px;
    width: 100%;
`;

export const NavigationMobile = styled.nav`

`;

export const NavigationMobileList = styled.ul`

`;

export const NavigationMobileItem = styled.li`

`;

export const NavigationMobileLink = styled.a`

`;

export const NavigationMobileIcon = styled.img`

`;