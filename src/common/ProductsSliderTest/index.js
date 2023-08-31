import { useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useProductsIndex } from "../../hooks/useProductsIndex";
import { Arrow } from "../../features/home/HomePage/Arrow";

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

export const ProductsSliderTest = () => {
    const { state, data } = useGetData("./popularProducts.json", 1);
    const dataLength = data && data.length;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [index, setPrevIndex, setNextIndex] = useProductsIndex(dataLength, windowWidth);
    const [leftArrowVisibility, setLeftArrowVisibility] = useState(true);
    const [rightArrowVisibility, setRightArrowVisibility] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        index === 0 ? setLeftArrowVisibility(true) : setLeftArrowVisibility(false);
    }, [index]);

    useEffect(() => {
        if ((windowWidth > 960 && index === 10 - 3) ||
            (windowWidth < 960 && windowWidth > 600 && index === 10 - 2) ||
            (windowWidth <= 600 && index === 10 - 1)) {
            setRightArrowVisibility(true);
        } else {
            setRightArrowVisibility(false);
        }
    }, [index, windowWidth]);

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