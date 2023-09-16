import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Heading = styled.h4`
    font-size: 26px;
    font-weight: 600;
    margin: 0;
`;

export const Buttons = styled.div`
    position: relative;
    width: 90px;
    height: 40px;

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        display: none;
    };
`;

export const Block = styled.div`
    height: 52px;
`;