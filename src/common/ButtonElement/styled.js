import { styled } from "styled-components";

export const Button = styled.a`
    display: inline-block;
    padding: 10px 20px;
    margin-top: 8px;
    border-radius: 30px;
    border: none;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:nth-child(1) {
        margin-right: 8px;
    };

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayFont};
    };
`;

export const JoinUsButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1.5px solid ${({ theme }) => theme.colors.grayFont};

    &:hover {
        border-color: ${({ theme }) => theme.colors.black};
    };
`;