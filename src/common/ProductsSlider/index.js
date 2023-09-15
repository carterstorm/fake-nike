import { useGetData } from "../../hooks/useGetData";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useProductsIndex } from "../../hooks/useProductsIndex";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useArrowVisibility } from "../../hooks/useArrowVisibility";
import { Arrow } from "../Arrow";
import { ProductsSliderLoader } from "../ProductsSliderLoader";

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

export const ProductsSlider = ({ heading, fetchLink }) => {
    const { state, data } = useGetData(fetchLink, 3);
    const windowWidth = useWindowWidth();
    const dataLength = data && data.length;
    const [index, setPrevIndex, setNextIndex] = useProductsIndex(dataLength, windowWidth);
    const [leftArrowVisibility, rightArrowVisibility] = useArrowVisibility(index, windowWidth, dataLength);

    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    return (
        <Wrapper>
            {state === "loading" ?
                (<ProductsSliderLoader />)
                :
                state === "error" ?
                    (<>Error</>)
                    :
                    (
                        <>
                            <Header>
                                <Heading>{heading}</Heading>
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
                                <SliderTrack
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
                                </SliderTrack>
                            </List>
                        </>
                    )}
        </Wrapper >
    );
};