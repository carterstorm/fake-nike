import styled from "styled-components";

export const ArrowButton = styled.button`
    position: absolute;
    z-index: 1;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${({ direction }) => direction === "left" && "24px"};
    right: ${({ direction }) => direction === "right" && "24px"};
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray};
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    transform: translate(0,-50%);
    transform: rotate(${({ direction }) => direction === "left" && "180deg"});
    border: none;
`;

export const ArrowImage = styled.img`
    width: 20px;
`;