import { styled } from "styled-components";

export const Wrapper = styled.section`
    width: 92vw;
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
    position: relative;
    width: 90px;
    height: 40px;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 12px 0 60px;
    overflow-x: hidden;
`;

export const SliderTrack = styled.div`
    display: flex;
    gap: 1vw;
    transition: .5s;
    transform: translateX(${({ index }) => -index * 31}vw);

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        transform: translateX(${({ index }) => -index * 47}vw);
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        transform: translateX(${({ index }) => -index * 93}vw);
    };
`;

export const Item = styled.li``;

export const Link = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
    object-fit: cover;
    width: 30vw;
    height: 30vw;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        width: 46vw;
        height: 46vw;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        width: 92vw;
        height: 92vw;
    };
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