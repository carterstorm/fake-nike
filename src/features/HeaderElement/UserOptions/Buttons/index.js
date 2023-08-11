import { useDispatch } from "react-redux";
import { buttonsElements } from "../../../../data";
import { toggleHide } from "../../hideSlice";

import {
    ButtonElement,
    ButtonImage,
    ButtonsItem,
    ButtonsList
} from "./styled";

export const Buttons = () => {
    const dispatch = useDispatch();

    const handleButtonClick = (alt) => {
        if (alt === "menu") {
            dispatch(toggleHide());
        };
    };

    return (
        <ButtonsList>
            {buttonsElements.map(({ id, alt, item }) => (
                <ButtonsItem key={id}>
                    <ButtonElement>
                        <ButtonImage
                            alt={alt}
                            src={item}
                            onClick={() => handleButtonClick(alt)}
                        />
                    </ButtonElement>
                </ButtonsItem>
            ))}
        </ButtonsList>
    );
};