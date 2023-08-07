import { styled } from "styled-components";

export const Container = styled.div``;

export const DesktopMenu = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    padding: 0 36px;
    font-size: 12px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.lightGrayBackground};
`;

export const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
`;

export const Brand = styled.a`
    cursor: pointer;
`;

export const UserMenuList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const UserMenuItem = styled.li`
    padding: 0 10px;
    margin: 0 2px;
    border-right: 1px solid black;
    cursor: pointer;

    &:hover {
        color: #a1a1a1;
    };

    &:nth-last-child(1) {
        border-right: none;
        padding-right: 0;
        margin-right: 0;
    };
`;

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

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0 0 0 125px;
    margin: 0;
    font-weight: 500;
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled.a`
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 12px;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid black;
    };
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