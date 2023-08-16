import shoppingBag from "../../../assets/svg/shoppingBag_icon.svg";
import help from "../../../assets/svg/help.svg";
import localMall from "../../../assets/svg/localMall.svg";
import store from "../../../assets/svg/store.svg";
import jordanLogo from "../../../assets/svg/jordanLogo.svg";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectHidden, toggleHidden, updateWindowWidth } from "../sideMenuSlice";
import close from "../../../assets/svg/close.svg";
import { MobileNavigation } from "./MobileNavigation";
import { OptionsList } from "./OptionsList";
import { Membership } from "./Membership";

import {
    CloseButton,
    CloseButtonContainer,
    Container,
    NavMobile,
    CloseButtonImage,
    MobileSupportButtons,
} from "./styled";

const mobileSupportButtonsData = [
    { id: 1, name: "Koszyk", src: shoppingBag },
    { id: 2, name: "Zamówienia", src: localMall },
    { id: 3, name: "Znajdź sklep", src: store },
    { id: 4, name: "Pomoc", src: help },
];

const jordanData = [
    { id: 1, name: "Jordan", src: jordanLogo },
];

export const SideMenu = () => {
    const dispatch = useDispatch();
    const hidden = useSelector(selectHidden);

    const handleButtonClick = () => {
        dispatch(toggleHidden());
    };

    const handleResizeWindow = () => {
        dispatch(updateWindowWidth(window.innerWidth));
    };

    useEffect(() => {
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    });

    return (
        <Container hide={hidden}>
            <CloseButtonContainer>
                <CloseButton
                    onClick={() => handleButtonClick()}
                >
                    <CloseButtonImage
                        src={close}
                    />
                </CloseButton>
            </CloseButtonContainer>
            <NavMobile>
                <MobileNavigation />
                <OptionsList
                    data={jordanData}
                />
                <Membership />
                <MobileSupportButtons>
                    <OptionsList
                        data={mobileSupportButtonsData}
                    />
                </MobileSupportButtons>
            </NavMobile>
        </Container>

    );
};