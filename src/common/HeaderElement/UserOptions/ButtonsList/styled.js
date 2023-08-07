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