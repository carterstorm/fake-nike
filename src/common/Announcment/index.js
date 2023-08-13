import { announcmentData } from "../../data";
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
import { useAnnouncmentEffect } from "../../hooks/useAnnouncmentEffect";

export const Announcment = () => {
    const index = useAnnouncmentEffect(announcmentData, 5);

    return (
        <Wrapper>
            <List announcmentLength={announcmentData.length}>
                {announcmentData.map(({ id, heading, text, firstLink, secoundLink }) => (
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