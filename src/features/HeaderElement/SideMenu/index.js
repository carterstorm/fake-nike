import { useDispatch, useSelector } from "react-redux";
import { selectHidden, selectIsSideMenuVisible, setWindowHidden, toggleHidden } from "../sideMenuSlice";
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
import { useEffect } from "react";

export const SideMenu = () => {
    const dispatch = useDispatch();
    const hidden = useSelector(selectHidden);
    const isSideMenuVisible = useSelector(selectIsSideMenuVisible);

    const handleButtonClick = () => {
        dispatch(toggleHidden());
    };

    const handleResizeWindow = () => {
        dispatch(setWindowHidden(window.innerWidth));
    };

    useEffect(() => {
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    });

    return (
        <>
            {!isSideMenuVisible ?
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
                : null}
        </>
    );
};