import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    font-size: 12px;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        flex-direction: column;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        padding-left: 20px;
    };
`;