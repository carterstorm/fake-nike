import favorite from "../../../../assets/svg/favorite_icon.svg";
import shoppingBag from "../../../../assets/svg/shoppingBag_icon.svg";
import search from "../../../../assets/svg/search_icon.svg";
import menu from "../../../../assets/svg/menu_icon.svg";

import {
    ButtonElement,
    ButtonImage,
    ButtonsItem,
    ButtonsList
} from "./styled";

import { useDispatch } from "react-redux";
import { toogleHide } from "../../hideSlice";

const buttonsElements = [
    { id: 1, alt: "search", item: search },
    { id: 2, alt: "favorite", item: favorite },
    { id: 3, alt: "shoppingBag", item: shoppingBag },
    { id: 4, alt: "menu", item: menu },
];

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