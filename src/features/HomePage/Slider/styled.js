import { styled } from "styled-components";

export const Wrapper = styled.div`
    margin-top: 48px;
    overflow: hidden;
`;

export const ImagesContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 300vw;
`;

export const ImageContainer = styled.li`

`;

export const Image = styled.img`
    width: 100vw;
    height: 550px;
    object-fit: cover;
`;