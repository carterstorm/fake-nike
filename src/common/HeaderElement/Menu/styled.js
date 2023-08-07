import { styled } from "styled-components";

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