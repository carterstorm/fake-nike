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

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        padding-left: 20px;
    };
`;

export const FooterContainer = styled.div`
    display: flex;

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        flex-direction: column;
    };
`;

export const Navigation = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        grid-template-columns: repeat(3, 1fr);
    };

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        grid-template-columns: repeat(1, 1fr);
    };
`;

export const Aside = styled.aside`
    text-transform: uppercase;
    font-weight: 600;
`;