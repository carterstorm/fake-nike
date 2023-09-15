import { styled } from "styled-components";
import { skeleton } from "../../keyframes/skeleton";

export const Wrapper = styled.section`
    width: 92vw;
    margin: 60px auto 12px;
`;

export const Header = styled.header`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.gray};
    animation: ${skeleton} 1.2s linear infinite;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 12px 0 40px;
`;

export const SliderTrack = styled.div`
    display: flex;
    gap: 1vw;
`;

export const Item = styled.li``;

export const BoxElement = styled.div`
    width: 30vw;
    height: 30vw;
    background-color: ${({ theme }) => theme.colors.gray};
    animation: ${skeleton} 1.2s linear infinite;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        width: 46vw;
        height: 46vw;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 92vw;
        height: 92vw;
    };
`;

export const Description = styled.figcaption`
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.gray};
    height: 36px;
    animation: ${skeleton} 1.2s linear infinite;
`;