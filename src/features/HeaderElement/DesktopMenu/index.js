import { JordanBrand } from "../../../common/JordanBrand";
import {
    Menu,
    UserMenuItem,
    UserMenuList
} from "./styled";

export const userMenuData = [
    { id: 1, title: "Znajdź sklep" },
    { id: 2, title: "Pomoc" },
    { id: 3, title: "Dołącz do nas" },
    { id: 4, title: "Zaloguj się" },
];

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