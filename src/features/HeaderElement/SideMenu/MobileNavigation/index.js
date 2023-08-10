import { navigationData } from "../../../../data";
import nextArrow from "../../../../assets/svg/next_arrow.svg";

import {
    NavButton,
    NavButtonIcon,
    NavButtonText,
    NavItem,
    NavList
} from "./styled";

export const MobileNavigation = () => {
    return (
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
    );
}