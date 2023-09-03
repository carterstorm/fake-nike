import { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useProductsIndex } from "../../hooks/useProductsIndex";
import { Arrow } from "../Arrow";

import {
    Buttons,
    Category,
    Description,
    Header,
    Heading,
    Image,
    ImageContainer,
    Item,
    Link,
    List,
    Price,
    PriceBox,
    SliderTrack,
    TextBox,
    Title,
    Wrapper,
} from "./styled";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export const ProductsSlider = ({ fetchLink }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const windowWidth = useWindowWidth();
    const dataLength = data && data.length;
    const [index, setPrevIndex, setNextIndex] = useProductsIndex(dataLength, windowWidth);
    const [leftArrowVisibility, setLeftArrowVisibility] = useState(true);
    const [rightArrowVisibility, setRightArrowVisibility] = useState(false);

    useEffect(() => {
        index === 0 ? setLeftArrowVisibility(true) : setLeftArrowVisibility(false);
    }, [index]);

    useEffect(() => {
        if ((windowWidth > 960 && index === dataLength - 3) ||
            (windowWidth < 960 && windowWidth > 600 && index === dataLength - 2) ||
            (windowWidth <= 600 && index === dataLength - 1)) {
            setRightArrowVisibility(true);
        } else {
            setRightArrowVisibility(false);
        }
    }, [index, windowWidth, dataLength]);

    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    return (
        <Wrapper>
            <Header>
                <Heading></Heading>
                <Buttons>
                    <Arrow
                        direction="left"
                        left={"0"}
                        onClick={() => setPrevIndex()}
                        disabled={leftArrowVisibility}
                    />
                    <Arrow
                        direction="right"
                        right={"0"}
                        onClick={() => setNextIndex()}
                        disabled={rightArrowVisibility}
                    />
                </Buttons>
            </Header>
            <List>
                {state === "loading" ?
                    (<>Loading</>)
                    :
                    state === "error" ?
                        (<>Error</>)
                        :
                        (<SliderTrack
                            index={index}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                        >
                            {data.map(({ id, description, category, image, price }) => (
                                <Item
                                    key={id}>
                                    <Link
                                        href="#">
                                        <ImageContainer>
                                            <Image
                                                src={image}
                                                alt={description}
                                                draggable={false}
                                            />
                                        </ImageContainer>
                                        <Description>
                                            <TextBox>
                                                <Title>{description}</Title>
                                                <Category>{category}</Category>
                                            </TextBox>
                                            <PriceBox>
                                                <Price>{price} zł</Price>
                                            </PriceBox>
                                        </Description>
                                    </Link>
                                </Item>
                            ))}
                        </SliderTrack>)}
            </List>
        </Wrapper >
    );
};