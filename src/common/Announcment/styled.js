import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 58px;
    width: 100%;
    padding-top: 10px;
    background-color: ${({ theme }) => theme.colors.lightGrayBackground};
    border-bottom: 1px solid #e1e1e1;
    overflow: hidden;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    width: ${({ announcmentLength }) => announcmentLength * (100)}vw;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100vw;
    transition: .5s ease;
    transform: translateX(${({ index }) => index * (-100)}vw);  
`;

export const Title = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 3px;
`;

export const TextBox = styled.div`
    display: flex;
    padding: 0 20px;
    font-size: 12px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Text = styled.span`

`;

export const LinkContainer = styled.div`
    @media (max-width: 600px) {
        padding-bottom: 5px;
    };
`;

export const Link = styled.a`
    padding: 0 4px;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
`;