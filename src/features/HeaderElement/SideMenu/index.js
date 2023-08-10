import { useDispatch, useSelector } from "react-redux";
import { selectHide, toogleHide } from "../hideSlice";
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
    const hide = useSelector(selectHide);

    const handleButtonClick = () => {
        dispatch(toogleHide());
    };

    return (
        <Container hide={hide}>
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