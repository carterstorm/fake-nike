import favorite from "../src/assets/svg/favorite_icon.svg";
import shoppingBag from "../src/assets/svg/shoppingBag_icon.svg";
import search from "../src/assets/svg/search_icon.svg";
import menu from "../src/assets/svg/menu_icon.svg";
import help from "../src/assets/svg/help.svg";
import localMall from "../src/assets/svg/localMall.svg";
import store from "../src/assets/svg/store.svg";
import jordanLogo from "../src/assets/svg/jordanLogo.svg";

export const navigationData = [
    { id: 1, name: "Nowe i polecane", path: "nowe-i-polecane" },
    { id: 2, name: "Mężczyźni", path: "mezczyzni" },
    { id: 3, name: "Kobiety", path: "kobiety" },
    { id: 4, name: "Dzieci", path: "dzieci" },
    { id: 5, name: "Wyprzedaż", path: "wyprzedaz" },
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

export const jordanData = [
    { id: 1, name: "Jordan", src: jordanLogo },
];


export const announcmentData = [
    {
        id: 1,
        heading: "Odkryj nasze wyprzedaże",
        text: "Dodano nowe modele. Sprawdź nasze wyprzedaże i najlepsze oferty.",
        firstLink: "Przeglądaj",
        secoundLink: null,
    },
    {
        id: 2,
        heading: "Przeglądaj wszystkie nowości",
        text: null,
        firstLink: "Przeglądaj",
        secoundLink: null,
    },
    {
        id: 3,
        heading: "Bezpłatna dostawa i zwrot",
        text: "Społeczność Nike: bezpłatna dostawa i 30 dni na bezpłatny zwrot.",
        firstLink: "Dowiedz się więcej",
        secoundLink: "Dołącz do nas",
    },

];