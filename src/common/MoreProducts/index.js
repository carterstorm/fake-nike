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
    Box,
    Paragraph
} from "./styled";

export const MoreProducts = ({ heading, fetchLink, ourApplications }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const dataLength = data && data.length;
    const windowWidth = useWindowWidth();

    return (
        <>
            <Wrapper>
                {state === "loading" ?
                    (<>Loading</>) :
                    state === "error" ?
                        (<>Error</>) : (
                            <>
                                <Header>
                                    <Heading>{heading}</Heading>
                                </Header>
                                <List
                                    number={dataLength}
                                    ourApplications={ourApplications}>
                                    {data.map(({ id, persons, alt, image, mobileImage, buttonText, paragraphText }) => (
                                        <Item key={id}>
                                            <Link>
                                                <ImageContainer>
                                                    <Image
                                                        src={windowWidth < theme.media.mobile ? mobileImage : image}
                                                        alt={alt}
                                                        ourApplications={ourApplications}
                                                    />
                                                </ImageContainer>
                                                <Box ourApplications={ourApplications}>
                                                    {ourApplications ? <Paragraph>{paragraphText}</Paragraph> : null}
                                                    {persons ? (<ButtonElement bright>{persons}</ButtonElement>) : null}
                                                    <ButtonElement
                                                        bright
                                                        eyeIcon={persons ? true : false}
                                                    >
                                                        {buttonText}
                                                    </ButtonElement>
                                                </Box>
                                            </Link>
                                        </Item>
                                    ))
                                    }
                                </List>
                            </>
                        )
                }
            </Wrapper>
        </>
    );
};