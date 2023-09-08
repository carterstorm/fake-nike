import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
    padding: 50px 0;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        width: 92vw;
        grid-template-columns: repeat(4, 160px);
    };

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        width: 92vw;
        grid-template-columns: repeat(4, 130px);
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 92vw;
        grid-template-columns: repeat(1, 200px);
    };
`;

export const Category = styled.div`
`;

export const Heading = styled.h4`
    margin: 0 0 25px 0;
    line-height: 25px;
    height: 25px;

    ${({ visibleMerchMenu }) => !visibleMerchMenu && css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        white-space: pre-wrap;
    `}
`;

export const List = styled.ul`
    padding: 10px 0 0;
    margin: 0;
    list-style: none;
    height: ${({ heightMerchMenu }) => heightMerchMenu}px;
    overflow: hidden;
    transition: .3s;

    ${({ visibleMerchMenu }) => visibleMerchMenu && css`
        height: 100%;
    `}
`;

export const Item = styled.li`
    margin: 0 0 10px 0;

    ${({ visibleMerchMenu }) => !visibleMerchMenu && css`
        overflow: hidden;
    `}
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    transition: .3s;
    line-height: 24px;
    font-weight: 500;

    ${({ visibleMerchMenu }) => !visibleMerchMenu && css`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        white-space: pre-wrap;
    `}

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;