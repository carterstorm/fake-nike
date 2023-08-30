import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useTouchHandlers } from "../../../../hooks/useTouchHandlers";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { Arrow } from "../Arrow";
import {
    fetchGetPopularProducts,
    selectArePopularProductsLoading,
    selectIndex,
    selectLeftArrowVisibility,
    selectPopularProducts,
    selectRightArrowVisibility,
    setNextIndex,
    setPrevIndex,
    setWindowWidth
} from "../../productsSliderSlice";

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

export const ProductsSlider = () => {
    const dispatch = useDispatch();
    const popularProducts = useSelector(selectPopularProducts);
    const arePopularProductsLoading = useSelector(selectArePopularProductsLoading);
    const index = useSelector(selectIndex);
    const leftArrowVisibility = useSelector(selectLeftArrowVisibility);
    const rightArrowVisibility = useSelector(selectRightArrowVisibility);

    useWindowWidth(() => setWindowWidth(window.innerWidth));

    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    useEffect(() => {
        dispatch(fetchGetPopularProducts());
    }, [dispatch]);

    return (
        <Wrapper>
            <Header>
                <Heading>Popularne w tym tygodniu</Heading>
                <Buttons>
                    <Arrow
                        direction="left"
                        left={"0"}
                        onClick={() => dispatch(setPrevIndex())}
                        disabled={leftArrowVisibility}
                    />
                    <Arrow
                        direction="right"
                        right={"0"}
                        onClick={() => dispatch(setNextIndex())}
                        disabled={rightArrowVisibility}
                    />
                </Buttons>
            </Header>
            <List>
                {arePopularProductsLoading ? "Loading" : (
                    <SliderTrack
                        index={index}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        {popularProducts.map(({ id, description, category, image, price }) => (
                            <Item key={id}>
                                <Link href="#">
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
                )}
            </List>
        </Wrapper >
    );
};