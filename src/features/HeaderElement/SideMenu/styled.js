import { styled } from "styled-components";

export const Container = styled.aside`
    position: fixed;
    z-index: 2;
    top: 0;
    right: ${({ hide }) => hide ? "0" : "-320px"};
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

export const MembershipContainer = styled.div`
    margin-top: 50px;
    margin-right: 20px;
    padding-top: 50px;
`;

export const MembershipParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grayFont};
    line-height: 1.45;
    margin: 0;
    padding-bottom: 16px;
`;

export const MembershipMore = styled.a`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
`;

export const MobileSupportButtons = styled.div`
    margin-top: 50px;
`;