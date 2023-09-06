import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content: space-between;
    width: 880px;
    margin: 0 auto;
    padding-top: 60px;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        width: 92vw;
        grid-template-columns: repeat(4, 160px);
    };

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        width: 92vw;
        grid-template-columns: repeat(4, 130px);
    };
`;

export const Category = styled.div`
`;

export const Heading = styled.h4`
    margin: 0 0 25px 0;
    line-height: 25px;
    height: 25px;
    overflow: ${({ visible }) => !visible && "hidden"};
    display: ${({ visible }) => !visible && "-webkit-box"};
    -webkit-box-orient: ${({ visible }) => !visible && "vertical"};
    -webkit-line-clamp: ${({ visible }) => !visible && "1"};
    white-space: ${({ visible }) => !visible && "pre-wrap"}; 
`;

export const List = styled.ul`
    padding: 10px 0 0;
    margin: 0;
    list-style: none;
    height: 140px;
    overflow: hidden;
    transition: .3s;

    ${({ visible }) => visible && css`
        height: 100%;
    `}
`;

export const Item = styled.li`
    margin: 0 0 10px 0;
    overflow: ${({ visible }) => !visible && "hidden"};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    overflow: ${({ visible }) => !visible && "hidden"};
    display: ${({ visible }) => !visible && "-webkit-box"};
    -webkit-box-orient: ${({ visible }) => !visible && "vertical"};
    -webkit-line-clamp: ${({ visible }) => !visible && "1"};
    white-space: ${({ visible }) => !visible && "pre-wrap"}; 
    transition: .3s;
    line-height: 24px;
    font-weight: 500;

    &:hover {
        color: ${({ theme }) => theme.colors.black};
    }
`;