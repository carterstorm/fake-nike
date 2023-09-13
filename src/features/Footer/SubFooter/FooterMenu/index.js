import { FooterList, MenuButton, MenuItem, MenuLink } from "./styled";

export const FooterMenu = () => {
    const footerMenuOptions = [
        { id: 1, option: "Przewodniki" },
        { id: 2, option: "Warunki korzystania", href: "#" },
        { id: 3, option: "Regulamin sprzedaży", href: "#" },
        { id: 4, option: "Dane firmy", href: "#" },
        { id: 5, option: "Polityka prywatności i zasady dotyczące plików cookie", href: "#" },
        { id: 6, option: "Ustawienia dotyczące plików cookie", href: "#" },
    ];

    return (
        <FooterList>
            {footerMenuOptions.map(({ id, option, href }) => {
                if (id === 1) {
                    return (
                        <MenuItem key={id}>
                            <MenuButton as="button">{option}</MenuButton>
                        </MenuItem>)
                } else {
                    return (
                        <MenuItem key={id}>
                            <MenuLink href={href}>{option}</MenuLink>
                        </MenuItem>)
                };
            })}
        </FooterList>
    );
}