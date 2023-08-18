import styled from "styled-components";

export const ArrowButton = styled.button`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ left }) => left}px;
    right: ${({ right }) => right}px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.gray};
    opacity: .5;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    border: none;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.lightGray};
        cursor: auto;
    };
`;

export const ArrowImage = styled.img`
    width: 24px;
    transform: rotate(${({ direction }) => direction === "left" && "180deg"});
`;