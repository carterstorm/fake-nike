import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectHidden, toggleHidden, updateWindowWidth } from "../sideMenuSlice";
import { jordanData, mobileSupportButtonsData } from "../../../data";
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