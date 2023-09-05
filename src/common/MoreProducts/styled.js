import { styled } from "styled-components";

export const Header = styled.header`
    width: 92vw;
    margin: 10px auto;
`;

export const Heading = styled.h4`
    font-size: 26px;
    font-weight: 600;
`;

export const Wrapper = styled.section`
    width: 92vw;
    margin: 20px auto 12px;
    overflow-x: scroll;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(${({ number }) => number}, 1fr);
    gap: 15px;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
       width: ${({ ourApplications }) => ourApplications ? 92 : 215}vw;
    };

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
       grid-template-columns: repeat(${({ ourApplications }) => ourApplications ? 1 : 3}, 1fr);
    };
`;

export const Item = styled.li``;

export const Link = styled.div`
    position: relative;
    top: 0;
    left: 0;
`;

export const ImageContainer = styled.div`  
`;

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    height: ${({ ourApplications }) => ourApplications ? 300 : null}px;

    @media (max-width: ${({ theme }) => theme.media.mobile}px) {
        height: ${({ ourApplications }) => ourApplications ? 60 : null}vh;
    };
`;

export const Box = styled.div`
    position: absolute;
    bottom: 50px;
    left: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ ourApplications }) => ourApplications ? "column" : "row"};;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        bottom: 30px;
        left: 20px;
    };
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.white};
    margin: 24px 10px;
    font-size: 20px;
    font-weight: 200;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.media.tablet}px) {
        font-size: 16px;
    };
`;
