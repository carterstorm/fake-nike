import { styled } from "styled-components";

export const ButtonElement = styled.button`
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

export const SearchButton = styled(ButtonElement)`
    position: absolute;
    transform: translateX(2px);
    background-color: transparent;
`;