import { css, styled } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        width: 37vw;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        margin: 10px 0 20px 0;
        width: 100%;
    };
`;

export const TitleContainer = styled.div`
    margin-bottom: 3px;
    text-transform: uppercase;
    font-weight: 600;
`;

export const SubTitleContainer = styled.div`
    margin-bottom: 3px;

    &:nth-last-child(1) {
        margin: 0;
    };
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    height: 30px;

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        padding-left: 20px;
    };
`;

export const Anchor = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    ${({ colorItems }) => colorItems && css`
        color: ${({ theme }) => theme.colors.gray};

        &:hover {
            color: ${({ theme }) => theme.colors.white};
        };
    `};

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 100%;
        justify-content: space-between;
    };
`;

export const AnchorButton = styled(Anchor)`
    text-transform: uppercase;
    font-weight: 600;
    background-color: black;
    border: none;
    padding: 0;
`;

export const ToogleIcon = styled.img`
    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 20px;
        height: 20px;
        margin: 0 20px 0 0;
        filter: invert(1);
    };
`;