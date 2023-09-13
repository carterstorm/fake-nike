import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 16px 0;
    font-size: 12px;
`;

export const Info = styled.div`
    display: flex;
    width: 50%;
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

export const FooterMenu = styled.ul`
    width: 50%;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    list-style: none;
`;