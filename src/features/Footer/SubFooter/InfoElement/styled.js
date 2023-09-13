import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    align-items: flex-end;
    width: 50%;
    padding: 12px 6px 12px 0;

    @media (max-width: ${({ theme }) => theme.media.tabletMin}px) {
        order: 1;
        width: 100%;
    };
`;

export const Location = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: flex-end;
`;

export const PinImage = styled.img`
    width: 18px;
    filter: invert(1);
`;

export const LocationCountry = styled.span`
    margin: 0 8px 2px 8px;
`;

export const Copyright = styled.p`
    margin: 0 0 2px 16px;
    padding-top: 20px;
    color: ${({ theme }) => theme.colors.gray};
`;