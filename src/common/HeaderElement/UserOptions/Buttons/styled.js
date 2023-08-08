import { styled } from "styled-components";

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
export const ButtonElement = styled.button`
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

export const ButtonImage = styled.img`
    width: 24px;
`;


export const SearchButton = styled(ButtonElement)`
    position: absolute;
    transform: translateX(2px);
    background-color: transparent;
`;

export const SearchButtonImage = styled.img`
  width: 24px;
`;