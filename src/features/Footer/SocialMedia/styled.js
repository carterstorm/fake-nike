import { styled } from "styled-components";

export const SocialMediaList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
`;

export const SocialMediaItem = styled.li`
    margin-left: 16px;
`;

export const SocialMediaImage = styled.img`
    width: 30px;
    height: 30px;
    filter: invert(1);
`;