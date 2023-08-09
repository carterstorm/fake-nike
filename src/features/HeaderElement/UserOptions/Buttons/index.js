import { useDispatch } from "react-redux";
import { buttonsElements } from "../../../../data";
import { toogleHide } from "../../hideSlice";

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
            dispatch(toogleHide());
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