import { styled } from "styled-components";

export const Header = styled.header`
    height: 60px;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 960px) and (orientation: landscape) {
        padding: 0 16px;
    };
`;