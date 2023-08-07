import { styled } from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
    height: 60px;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const UserOptions = styled.aside`
    display: flex;
    align-items: center;
`;

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`;

export const SearchInput = styled.input`
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 100px;
    padding-left: 45px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.lightGrayBackground};
    outline: none;
    &:hover {
        background-color: ${({ theme }) => theme.colors.grayBackgroundHover};
    }
`;

export const SearchButton = styled.button`
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    position: absolute;
    transform: translateX(2px);
    background-color: transparent;
    cursor: pointer;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.grayBackgroundHover};
    }
`;

export const ButtonsList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const ButtonsItem = styled.li`
    padding: 0 10px;
    &:nth-last-child(1) {
        padding: 0;
    };
`;

export const Button = styled.button`
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayBackgroundHover};
    };
`;