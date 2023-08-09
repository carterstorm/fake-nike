import { JordanLogo } from "../../../assets/svg/Jordan_Logo";
import { userMenuData } from "../../../data";
import {
    Brand,
    BrandContainer,
    DesktopMenu,
    UserMenuItem,
    UserMenuList
} from "./styled";

export const Menu = () => {
    return (
        <DesktopMenu>
            <BrandContainer>
                <Brand>
                    <JordanLogo />
                </Brand>
            </BrandContainer>
            <UserMenuList>
                {userMenuData.map(({ id, title }) => (
                    <UserMenuItem key={id}>
                        {title}
                    </UserMenuItem>
                ))}
            </UserMenuList>
        </DesktopMenu>
    );
};