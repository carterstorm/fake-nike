import { JordanLogo } from "../../assets/svg/Jordan_Logo";
import {
    Brand,
    BrandContainer,
    DesktopMenu,
    UserMenuItem,
    UserMenuList
} from "./styled";

const userMenuData = [
    { id: 1, title: "Znajdź sklep" },
    { id: 2, title: "Pomoc" },
    { id: 3, title: "Dołącz do nas" },
    { id: 4, title: "Zaloguj się" },
];

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