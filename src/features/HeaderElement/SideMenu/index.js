import { useDispatch, useSelector } from "react-redux";
import { selectHide, toogleHide } from "../hideSlice";
import { mobileSupportButtonsData } from "../../../data";

import close from "../../../assets/svg/close.svg";
import { JordanLogo } from "../../../assets/svg/Jordan_Logo";
import { MobileNavigation } from "./MobileNavigation";

import {
    CloseButton,
    CloseButtonContainer,
    Container,
    NavMobile,
    CloseButtonImage,
    JordanLink,
    JordanText,
    JordanContainer,
    JoinUsBox,
    MembershipContainer,
    MembershipParagraph,
    MembershipMore,
    MobileSupportButtons,
} from "./styled";
import { OptionsList } from "./OptionsList";

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

                <JoinUsBox>
                    <JordanLink>
                        <JordanContainer>
                            <JordanLogo></JordanLogo>
                        </JordanContainer>
                        <JordanText>Jordan</JordanText>
                    </JordanLink>
                    <MembershipContainer>
                        <MembershipParagraph>
                            Zostań członkiem Nike i uzyskaj dostęp do najlepszych sportowych produktów, inspiracji i historii.
                            <MembershipMore> Dowiedz się więcej.</MembershipMore>
                        </MembershipParagraph>
                    </MembershipContainer>
                </JoinUsBox>

                <MobileSupportButtons>
                    <OptionsList
                        data={mobileSupportButtonsData}
                    />
                </MobileSupportButtons>

            </NavMobile>
        </Container>
    );
};