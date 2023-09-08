import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    font-weight: 100;
    font-size: 12px;
    padding-top: 40px;
`;

export const FooterContainer = styled.div`
    width: 92vw;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 16px;
`;

export const Aside = styled.aside`
    max-width: 18vw;
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`;