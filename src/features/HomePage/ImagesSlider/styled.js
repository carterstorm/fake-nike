import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 48px;
    overflow: hidden;
    position: relative;
`;

export const ImagesContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 300vw;
`;

export const ImageContainer = styled.li`
    transform: translateX(${({ slideIndex }) => slideIndex * (-100)}vw);
    transition: 1s ease;
`;

export const Image = styled.img`
    width: 100vw;
    height: 45vw;
    object-fit: cover;

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        height: 150vw;
    }
`;