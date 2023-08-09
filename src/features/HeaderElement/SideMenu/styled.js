import { styled } from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: ${({ hide }) => hide ? "0" : "-320px"};
    width: 320px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    transition: .25s;
`;