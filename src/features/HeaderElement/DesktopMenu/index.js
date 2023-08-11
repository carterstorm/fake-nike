import { userMenuData } from "../../../data";
import { JordanBrand } from "../../../common/JordanBrand";
import {
    Menu,
    UserMenuItem,
    UserMenuList
} from "./styled";

export const DesktopMenu = () => {
    return (
        <Menu>
            <JordanBrand />
            <UserMenuList>
                {userMenuData.map(({ id, title }) => (
                    <UserMenuItem key={id}>
                        {title}
                    </UserMenuItem>
                ))}
            </UserMenuList>
        </Menu>
    );
};