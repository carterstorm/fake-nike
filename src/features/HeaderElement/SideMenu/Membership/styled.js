import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    margin-right: 20px;
    padding-top: 50px;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grayFont};
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

export const Button = styled.a`
    width: fit-content;
    margin-top: 8px;
    border-radius: 30px;
    border: 1.5px solid ${({ theme }) => theme.colors.grayFont};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        border-color: ${({ theme }) => theme.colors.black};
    };
`;

export const JoinUsButton = styled(Button)`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayFont};
    }
`;

export const Text = styled.span`
    display: inline-block;
    padding: 10px 25px;
`;