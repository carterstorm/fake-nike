import { announcmentData } from "../../data";
import {
    Container,
    Item,
    Link,
    List,
    Text,
    TextBox,
    Title
} from "./styled";

export const Announcment = () => (
    <Container>
        <List>
            {announcmentData.map(({ id, heading, text, firstLink, secoundLink }) => (
                <Item key={id}>
                    <Title>{heading}</Title>
                    <TextBox>
                        <Text>{text}</Text>
                        <Link>{firstLink}</Link>
                        <Link>{secoundLink}</Link>
                    </TextBox>
                </Item>
            ))}
        </List>
    </Container>
);