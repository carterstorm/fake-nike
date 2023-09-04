import { useGetData } from "../../hooks/useGetData";
import { ButtonElement } from "../ButtonElement";
import {
    Header,
    Heading,
    List,
    Item,
    Wrapper,
    Link,
    Image,
    ImageContainer,
    ButtonsContainer
} from "./styled";

export const MoreProducts = ({ heading, fetchLink }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const dataLength = data && data.length;

    return (
        <>
            <Header>
                <Heading>{heading}</Heading>
            </Header>
            <Wrapper>
                <List number={dataLength}>
                    {state === "loading" ?
                        (<>Loading</>) :
                        state === "error" ?
                            (<>Error</>) :
                            (data.map(({ id, persons, alt, image }) => (
                                <Item key={id}>
                                    <Link>
                                        <ImageContainer>
                                            <Image src={image} alt={alt} />
                                        </ImageContainer>
                                        <ButtonsContainer>
                                            <ButtonElement>{persons}</ButtonElement>
                                            <ButtonElement eyeIcon={true}>Przeglądaj stylizację</ButtonElement>
                                        </ButtonsContainer>
                                    </Link>
                                </Item>
                            ))
                            )}
                </List>
            </Wrapper>
        </>
    );
};