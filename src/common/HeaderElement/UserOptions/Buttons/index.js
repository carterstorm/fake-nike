import favorite from "../../../../assets/svg/favorite_icon.svg";
import shoppingBag from "../../../../assets/svg/shoppingBag_icon.svg";

import {
    ButtonElement,
    ButtonImage,
    ButtonsItem,
    ButtonsList
} from "./styled";

export const Buttons = () => {
    return (
        <ButtonsList>
            <ButtonsItem>
                <ButtonElement>
                    <ButtonImage
                        src={favorite}
                    />
                </ButtonElement>
            </ButtonsItem>
            <ButtonsItem>
                <ButtonElement>
                    <ButtonImage
                        src={shoppingBag}
                    />
                </ButtonElement>
            </ButtonsItem>
        </ButtonsList>
    );
};