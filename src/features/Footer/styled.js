import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    font-weight: 100;
    font-size: 12px;
`;

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    padding: 40px 40px 0 40px;
`;

export const FooterContainer = styled.div`
    display: flex;
`;

export const Navigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        grid-template-columns: repeat(3, 1fr);
    };
`;

export const Aside = styled.aside`
    text-transform: uppercase;
    font-weight: 600;
`;