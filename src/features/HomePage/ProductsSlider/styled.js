import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 95vw;
    margin: 16px auto 12px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Heading = styled.h4`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
`;

export const Buttons = styled.div`
    width: 200px;
    height: 60px;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 12px 0 30px;
    display: flex;
    gap: 15px;
    overflow-x: scroll;
`;

export const Item = styled.li``;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const ImageContainer = styled.div`
    
`;

export const Image = styled.img`
    object-fit: cover;
    width: calc((95vw - 30px)/3);
    height: calc((95vw - 30px)/3);
`;

export const Description = styled.figcaption`
    display: flex;
    justify-content: space-between;
    margin: 12px 16px 0 0;
`;

export const TextBox = styled.div``;

export const Title = styled.h4`
    margin: 0;
    font-weight: 600;
`;

export const Category = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.gray};
`;
export const PriceBox = styled.div``;

export const Price = styled.p`
    margin: 0;
    font-weight: 600;
`;