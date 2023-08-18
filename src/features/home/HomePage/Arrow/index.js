import arrow from "../../../../assets/svg/next_arrow.svg";

import {
    ArrowButton,
    ArrowImage
} from "./styled";

export const Arrow = ({ direction, onClick, left, right, disabled }) => (
    <ArrowButton
        direction={direction}
        onClick={onClick}
        left={left}
        right={right}
        disabled={disabled}
    >
        <ArrowImage
            direction={direction}
            src={arrow}
            alt="Arrow"
            draggable={false}
        />
    </ArrowButton>
);