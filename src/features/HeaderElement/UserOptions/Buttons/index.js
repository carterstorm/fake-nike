import favorite from "../../../../assets/svg/favorite_icon.svg";
import search from "../../../../assets/svg/search_icon.svg";
import menu from "../../../../assets/svg/menu_icon.svg";
import shoppingBag from "../../../../assets/svg/shoppingBag_icon.svg";

import { useDispatch } from "react-redux";
import { toggleHidden } from "../../sideMenuSlice";

import {
    ButtonElement,
    ButtonImage,
    ButtonsItem,
    ButtonsList
} from "./styled";

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
            dispatch(toggleHidden());
        }
    };

    return (
        <ButtonsList>
            {buttonsElements.map(({ id, alt, item }) => (
                <ButtonsItem key={id}>
                    <ButtonElement
                        onClick={() => handleButtonClick(alt)}
                    >
                        <ButtonImage
                            alt={alt}
                            src={item}
                        />
                    </ButtonElement>
                </ButtonsItem>
            ))}
        </ButtonsList>
    );
};