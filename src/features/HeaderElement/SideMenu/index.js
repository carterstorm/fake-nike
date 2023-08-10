import { useDispatch, useSelector } from "react-redux";
import { selectHide, toogleHide } from "../hideSlice";
import { mobileSupportButtonsData, navigationData } from "../../../data";
import nextArrow from "../../../assets/svg/next_arrow.svg";
import close from "../../../assets/svg/close.svg";
import { JordanLogo } from "../../../assets/svg/Jordan_Logo";

import {
    CloseButton,
    CloseButtonContainer,
    Container,
    NavMobile,
    NavItem,
    NavButton,
    NavButtonIcon,
    NavList,
    NavButtonText,
    CloseButtonImage,
    JordanLink,
    JordanText,
    OptionsList,
    OptionItem,
    OptionImage,
    JordanContainer,
    JoinUsBox,
    MembershipContainer,
    MembershipParagraph,
    MembershipMore,
    MobileSupportButtons,
    OptionLink,
    OptionParagraph,
    Image,
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
                <NavList>
                    {navigationData.map(({ id, name }) => (
                        <NavItem key={id}>
                            <NavButton>
                                <NavButtonText>{name}</NavButtonText>
                                <NavButtonIcon src={nextArrow} />
                            </NavButton>
                        </NavItem>
                    ))}
                </NavList>

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
                    <OptionsList>
                        {mobileSupportButtonsData.map(({ id, name, src }) => (
                            <OptionItem key={id}>
                                <OptionLink>
                                    <OptionImage>
                                        <Image src={src}></Image>
                                    </OptionImage>
                                    <OptionParagraph>{name}</OptionParagraph>
                                </OptionLink>
                            </OptionItem>
                        ))}
                    </OptionsList>
                </MobileSupportButtons>

            </NavMobile>
        </Container>
    );
};