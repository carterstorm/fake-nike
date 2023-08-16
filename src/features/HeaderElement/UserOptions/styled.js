import { styled } from "styled-components";

export const Wrapper = styled.aside`
    display: flex;
    align-items: center;
`;

export const SearchBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 10px;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        display: none;
    };
`;

export const SearchInput = styled.input`
    width: 180px;
    height: 40px;
    border: none;
    border-radius: 100px;
    padding-left: 45px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.lightGray};
    outline: none;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.grayHover};
    }
`;