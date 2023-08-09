import { userMenuData } from "../../../data";
import { JordanBrand } from "../../../common/JordanBrand";
import {
    DesktopMenu,
    UserMenuItem,
    UserMenuList
} from "./styled";

export const Menu = () => {
    return (
        <DesktopMenu>
            <JordanBrand />
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