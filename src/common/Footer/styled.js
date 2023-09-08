import { styled } from "styled-components";

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 100;
    font-size: 12px;
    padding-top: 40px;
`;

export const FooterContainer = styled.div`
    width: 92vw;
    margin: 0 auto;
`;

export const Navigation = styled.nav``;

export const Aside = styled.aside`
    max-width: 270px;
    width: 100%;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    height: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    
    &:nth-last-child(1) {
        margin: 0;
    };
`;

export const AsideAnchor = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
`;