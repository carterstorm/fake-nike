import { useSelector } from "react-redux";
import { selectHide } from "../hideSlice";
import {
    CloseButtonContainer,
    Container,
    NavigationMobile,
    NavigationMobileIcon,
    NavigationMobileItem,
    NavigationMobileLink,
    NavigationMobileList
} from "./styled";

export const SideMenu = () => {
    const hide = useSelector(selectHide);

    return (
        <Container hide={hide}>
            <CloseButtonContainer>
                {/* <Button></Button> */}
            </CloseButtonContainer>
            <NavigationMobile>
                <NavigationMobileList>
                    <NavigationMobileItem>
                        <NavigationMobileLink>
                            <NavigationMobileIcon />
                        </NavigationMobileLink>
                    </NavigationMobileItem>
                </NavigationMobileList>
            </NavigationMobile>
        </Container>
    );
};