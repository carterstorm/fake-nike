import { styled } from "styled-components";

export const Options = styled.ul`
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

export const OptionText = styled.p`
    margin: 0;
    padding-left: 12px;
`;