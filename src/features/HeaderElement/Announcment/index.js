import { useEffect, useState } from "react";
import { announcmentData } from "../../../data";
import {
    Wrapper,
    Item,
    Link,
    List,
    Text,
    TextBox,
    Title,
} from "./styled";

export const Announcment = () => {
    const [index, setIndex] = useState(0);

    const announcmentDataLength = announcmentData.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index === announcmentDataLength - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 5 * 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [index, announcmentDataLength]);

    return (
        <Wrapper>
            <List announcmentDataLength={announcmentDataLength}>
                {announcmentData.map(({ id, heading, text, firstLink, secoundLink }) => (
                    <Item key={id} index={index}>
                        <Title>{heading}</Title>
                        <TextBox>
                            <Text>{text}</Text>
                            <Link>{firstLink}</Link>
                            <Link>{secoundLink}</Link>
                        </TextBox>
                    </Item>
                ))}
            </List>
        </Wrapper>
    );
};