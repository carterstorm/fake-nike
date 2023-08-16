import arrow from "../../../assets/svg/next_arrow.svg";

import {
    ArrowButton,
    ArrowImage
} from "./styled";

export const Arrow = ({ direction, onClick }) => (
    <ArrowButton
        direction={direction}
        onClick={onClick}
    >
        <ArrowImage
            direction={direction}
            src={arrow}
            alt="Arrow"
        />
    </ArrowButton>
);