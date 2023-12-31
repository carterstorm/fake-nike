import { styled } from "styled-components";
import { ReactComponent as JordanElement } from "../../../assets/svg/jordan.svg";

export const Menu = styled.aside`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    padding: 0 36px;
    font-size: 12px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.lightGray};

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        display: none;
    };
`;

export const UserMenuList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const UserMenuItem = styled.li`
    padding: 0 15px;
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

export const JordanIcon = styled(JordanElement)`
    width: 26px;
    height: 26px;
    cursor: pointer;
`;
