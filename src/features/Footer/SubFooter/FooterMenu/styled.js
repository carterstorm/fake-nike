import { styled } from "styled-components";

export const FooterList = styled.ul`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 50%;
    margin: 0;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
    };
`;

export const MenuItem = styled.li`
    list-style: none;
    padding: 12px;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        padding-left: 0;
    };
`;

export const MenuLink = styled.a`
    display: inline-block;
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
    transition: .2s;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const MenuButton = styled(MenuLink)`
    background-color: black;
    border: none;
    padding: 0;
`;