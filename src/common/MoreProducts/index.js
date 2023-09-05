import { useGetData } from "../../hooks/useGetData";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { ButtonElement } from "../ButtonElement";
import { theme } from "../../theme";

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

export const MoreProducts = ({ heading, fetchLink, ourApplications }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const dataLength = data && data.length;
    const windowWidth = useWindowWidth();

    return (
        <>
            <Header>
                <Heading>{heading}</Heading>
            </Header>
            <Wrapper>
                <List
                    number={dataLength}
                    ourApplications={ourApplications}>
                    {state === "loading" ?
                        (<>Loading</>) :
                        state === "error" ?
                            (<>Error</>) :
                            (data.map(({ id, persons, alt, image, mobileImage, buttonText }) => (
                                <Item key={id}>
                                    <Link>
                                        <ImageContainer>
                                            <Image
                                                src={windowWidth < theme.media.mobile ? mobileImage : image}
                                                alt={alt}
                                                ourApplications={ourApplications}
                                            />
                                        </ImageContainer>
                                        <ButtonsContainer>
                                            {persons ? (<ButtonElement bright>{persons}</ButtonElement>) : null}
                                            <ButtonElement
                                                bright
                                                eyeIcon={persons ? true : false}
                                            >
                                                {buttonText}
                                            </ButtonElement>
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