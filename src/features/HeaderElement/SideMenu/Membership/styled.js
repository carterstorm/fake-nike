import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    margin-right: 20px;
    padding-top: 50px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.45;
    margin: 0;
    padding-bottom: 16px;
`;

export const ReadMore = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
`;

export const Buttons = styled.div`
    margin-top: 8px;
    display: flex;
    flex-direction: column;
`;