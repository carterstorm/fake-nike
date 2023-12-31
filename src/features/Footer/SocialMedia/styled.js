import { styled } from "styled-components";

export const SocialMediaList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-content: flex-start;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        flex-wrap: wrap;
        justify-content: flex-end;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        justify-content: flex-start;
        padding-left: 20px;
    };
`;

export const SocialMediaItem = styled.li`
    margin-left: 16px;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        margin-bottom: 16px;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        &:nth-child(1) {
            margin-left: 0;
        };
    };
`;

export const SocialMediaImage = styled.img`
    width: 30px;
    height: 30px;
    transition: .2s;
    filter: invert(0.5);
    cursor: pointer;

    &:hover {
        filter: invert(1);
    };
`;