import { useDispatch, useSelector } from "react-redux";
import { selectHide, toogleHide } from "../hideSlice";
import { jordanData, mobileSupportButtonsData } from "../../../data";

import close from "../../../assets/svg/close.svg";
import { MobileNavigation } from "./MobileNavigation";

import {
    CloseButton,
    CloseButtonContainer,
    Container,
    NavMobile,
    CloseButtonImage,
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
                    <OptionsList
                        data={jordanData}
                    />
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