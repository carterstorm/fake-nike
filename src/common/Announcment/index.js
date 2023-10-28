import { useAnnouncementEffect } from "../../hooks/useAnnouncementEffect";
import {
    Wrapper,
    Item,
    Link,
    List,
    Text,
    TextBox,
    Title,
    LinkContainer,
} from "./styled";

const announcementData = [
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

export const Announcement = () => {
    const index = useAnnouncementEffect(announcementData, 5);

    return (
        <Wrapper>
            <List announcementDataLength={announcementData.length}>
                {announcementData.map(({ id, heading, text, firstLink, secoundLink }) => (
                    <Item key={id} index={index}>
                        <Title>{heading}</Title>
                        <TextBox>
                            <Text>{text}</Text>
                            <LinkContainer>
                                <Link>{firstLink}</Link>
                                <Link>{secoundLink}</Link>
                            </LinkContainer>
                        </TextBox>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
};