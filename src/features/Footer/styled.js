import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    font-weight: 100;
    font-size: 12px;
    padding-top: 40px;
`;

export const FooterContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 92vw;
`;

export const Navigation = styled.nav`
    padding-bottom: 16px;
    display: flex;
`;

export const Aside = styled.aside`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`;