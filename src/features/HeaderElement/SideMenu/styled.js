import { styled } from "styled-components";

export const Container = styled.aside`
    position: fixed;
    z-index: 2;
    top: 0;
    right: ${({ hide }) => hide ? "-320px" : "0"};
    width: 320px;
    height: 100%;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.colors.white};
    transition: .25s;
`;

export const CloseButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 60px;
    padding: 0 16px;
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    padding: 0;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grayBackgroundHover};
    };
`;

export const CloseButtonImage = styled.img`
    width: 24px;
`;

export const NavMobile = styled.nav`
    padding: 0 22px 150px 36px;
`;

export const MobileSupportButtons = styled.div`
    margin-top: 50px;
`;