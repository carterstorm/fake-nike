import nextArrow from "../../../../assets/svg/next_arrow.svg";

import {
    NavButton,
    NavButtonIcon,
    NavButtonText,
    NavItem,
    NavList
} from "./styled";

export const navigationData = [
    { id: 1, name: "Nowe i polecane", path: "nowe-i-polecane" },
    { id: 2, name: "Mężczyźni", path: "mezczyzni" },
    { id: 3, name: "Kobiety", path: "kobiety" },
    { id: 4, name: "Dzieci", path: "dzieci" },
    { id: 5, name: "Wyprzedaż", path: "wyprzedaz" },
];

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