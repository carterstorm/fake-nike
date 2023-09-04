import { styled } from "styled-components";

export const Header = styled.header`
    width: 92vw;
    margin: 10px auto;
`;

export const Heading = styled.h4`
    font-size: 26px;
    font-weight: 600;
`;

export const Wrapper = styled.section`
    width: 92vw;
    margin: 20px auto 12px;
    overflow-x: scroll;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(${({ number }) => number}, 1fr);
    gap: 15px;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
       display: flex;
       width: 210vw;
    };
`;

export const Item = styled.li``;

export const Link = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

export const ImageContainer = styled.div`
`;

export const Image = styled.img`
    width: 100%;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 50px;
    left: 40px;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        bottom: 30px;
        left: 20px;
    };
`;