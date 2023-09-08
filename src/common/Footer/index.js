import {
    Aside,
    AsideAnchor,
    FooterContainer,
    Item,
    List,
    Navigation,
    Wrapper
} from "./styled";

const asideOptions = [
    { id: 1, itemText: "karty upominkowe" },
    { id: 2, itemText: "znajdź sklep" },
    { id: 3, itemText: "nike journal" },
    { id: 4, itemText: "zostań członkiem" },
    { id: 5, itemText: "rabat dla studentów" },
    { id: 6, itemText: "prześlij opinię" },
    { id: 7, itemText: "kody promocyjne" },
];

export const Footer = () => (
    <Wrapper>
        <FooterContainer>
            <Navigation>
                <Aside>
                    <List>
                        {asideOptions.map(({ id, itemText }) => (
                            <Item key={id}>
                                <AsideAnchor
                                    href="#"
                                >
                                    {itemText}
                                </AsideAnchor>
                            </Item>
                        ))}
                    </List>
                </Aside>
            </Navigation>
        </FooterContainer>
    </Wrapper>
);