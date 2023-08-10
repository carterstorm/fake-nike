import favorite from "../src/assets/svg/favorite_icon.svg";
import shoppingBag from "../src/assets/svg/shoppingBag_icon.svg";
import search from "../src/assets/svg/search_icon.svg";
import menu from "../src/assets/svg/menu_icon.svg";
import help from "../src/assets/svg/help.svg";
import localMall from "../src/assets/svg/localMall.svg";
import store from "../src/assets/svg/store.svg";

export const navigationData = [
    { id: 1, name: "Nowe i polecane" },
    { id: 2, name: "Mężczyźni" },
    { id: 3, name: "Kobiety" },
    { id: 4, name: "Dzieci" },
    { id: 5, name: "Wyprzedaż" },
];

export const buttonsElements = [
    { id: 1, alt: "search", item: search },
    { id: 2, alt: "favorite", item: favorite },
    { id: 3, alt: "shoppingBag", item: shoppingBag },
    { id: 4, alt: "menu", item: menu },
];

export const userMenuData = [
    { id: 1, title: "Znajdź sklep" },
    { id: 2, title: "Pomoc" },
    { id: 3, title: "Dołącz do nas" },
    { id: 4, title: "Zaloguj się" },
];

export const mobileSupportButtonsData = [
    { id: 1, name: "Koszyk", src: shoppingBag },
    { id: 2, name: "Zamówienia", src: localMall },
    { id: 3, name: "Znajdź sklep", src: store },
    { id: 4, name: "Pomoc", src: help },
];