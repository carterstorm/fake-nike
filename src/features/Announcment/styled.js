import styled from "styled-components";

export const Container = styled.div`
    height: 58px;
    width: 100%;
    padding-top: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrayBackground};
    border-bottom: 1px solid #e1e1e1;
    overflow: hidden;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 300vw;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

export const Title = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 3px;
`;

export const TextBox = styled.div`
    font-size: 12px;
`;

export const Text = styled.span`

`;

export const Link = styled.a`
    padding: 0 4px;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
`;