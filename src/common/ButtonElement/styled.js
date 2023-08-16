import { styled } from "styled-components";

export const Button = styled.a`
    width: fit-content;
    display: inline-block;
    padding: 10px 20px;
    margin-top: 8px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:nth-child(1) {
        margin-right: 8px;
    };

    &:hover {
        background-color: ${({ theme }) => theme.colors.gray};
    };
`;

export const Login = styled(Button)`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1.5px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
        border-color: ${({ theme }) => theme.colors.black};
        background-color: ${({ theme }) => theme.colors.white};
    };
`;