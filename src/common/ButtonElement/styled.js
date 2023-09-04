import { styled } from "styled-components";

export const Button = styled.a`
    height: 45px;
    line-height: 25px;
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

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const EyeIcon = styled.img`
    width: 24px;
    margin-right: 8px;
    filter: invert(1);
`;