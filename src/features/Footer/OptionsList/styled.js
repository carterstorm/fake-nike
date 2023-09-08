import { css, styled } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 18vw;
    width: 100%;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 3px;
    height: 30px;

    &:nth-last-child(1) {
        margin: 0;
    };
`;

export const Anchor = styled.a`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    ${({ firstItem }) => firstItem && css`
        text-transform: uppercase;
        font-weight: 600;
    `};

    ${({ otherItems }) => otherItems && css`
        color: ${({ theme }) => theme.colors.gray};

        &:hover {
            color: ${({ theme }) => theme.colors.white};
        };
    `};
`;