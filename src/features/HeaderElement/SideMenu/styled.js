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
    /* background-color: red; */
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

export const JoinUsBox = styled.div`
    padding-top: 16px;
`;

export const JordanLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const JordanContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
`;

export const JordanText = styled.p`
    margin: 0;
    padding-left: 12px;
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

export const OptionsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 500;
`;

export const OptionItem = styled.li`
    padding-top: 12px;

    &:nth-child(1) {
        padding-top: 0;
    }
`;

export const OptionLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const OptionImage = styled.div`

`;

export const Image = styled.img`
    height: 26px;
    width: 26px;
`;

export const OptionParagraph = styled.p`
    margin: 0;
    padding-left: 12px;
`;