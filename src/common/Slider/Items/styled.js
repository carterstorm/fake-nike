import styled from "styled-components";

export const ItemsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(${({ numberOfItems }) => numberOfItems}, 1fr);
    justify-content: center;
    grid-gap: 15px;
    list-style: none;
    padding: 12px 0 0;
    margin: 0;
    overflow: hidden;
`;

export const Item = styled.li`

`;

export const ItemLink = styled.a`
    display: block;
    cursor: pointer;
    text-decoration: none;
`;

export const ItemImage = styled.div`
    width: 500px;
    height: 500px;

    @media (max-width: ${({ theme }) => theme.media.desktopMax}px) {
        width: 300px;
        height: 300px;
    };
`;

export const Image = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.media.desktopMax}px) {
        width: 300px;
        height: 300px;
    };
`;

export const ItemText = styled.figcaption`
    margin-top: 14px;
    height: 50px;
`;

export const Text = styled.h4`
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray};
    margin: 0 25px 0 0;
`;


export const Number = styled.span`
    position: absolute;
    top: 35px;
    left: 55vw;
    background-color: ${({ theme }) => theme.colors.numberColor};
    color: ${({ theme }) => theme.colors.white};
    padding: 6px 16px;
    border-radius: 20px;
    font-weight: 200;
`;