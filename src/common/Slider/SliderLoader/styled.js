import styled from "styled-components";
import { skeleton } from "../../../keyframes/skeleton";

export const Wrapper = styled.section`
    width: 92vw;
    margin: 0 auto;
`;

export const Header = styled.header`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray};
    animation: ${skeleton} 1.2s linear infinite;
    margin: 0 auto 12px;
`;

export const ItemsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(${({ numberOfElements }) => numberOfElements}, 1fr);
    justify-content: center;
    grid-gap: 15px;
    overflow: hidden;
    margin: 0;
    padding: 12px 0 0;
    list-style: none;
`;

export const Item = styled.li`
    width: 500px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.gray};
    animation: ${skeleton} 1.2s linear infinite;

    @media (max-width: ${({ theme }) => theme.media.desktopMax}px) {
        width: 300px;
        height: 300px;
    };
`;

export const TextContainer = styled.div`
    margin-top: 14px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.gray};
    animation: ${skeleton} 1.2s linear infinite;
`;