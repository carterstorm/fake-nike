import { styled } from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    width: 92vw;
    margin: 60px auto 12px;
    overflow-x: scroll;
    
    @media (max-width: ${({ theme }) => theme.media.desktopMax}px) {
        width: 100vw;
    };
`;