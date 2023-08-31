import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useWindowWidth } from "../../hooks/useWindowWidth";
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

export const ProductsSlider = ({
    heading,
    selectData,
    selectAreProductsLoading,
    selectIndex,
    selectLeftArrowVisibility,
    selectRightArrowVisibility,
    setPrevIndex,
    setNextIndex,
    fetchData,
    selectWindowWidth
}) => {
    const dispatch = useDispatch();
    const products = useSelector(selectData);
    const areProductsLoading = useSelector(selectAreProductsLoading);
    const index = useSelector(selectIndex);
    const leftArrowVisibility = useSelector(selectLeftArrowVisibility);
    const rightArrowVisibility = useSelector(selectRightArrowVisibility);

    useWindowWidth(() => selectWindowWidth(window.innerWidth));

    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch, fetchData]);

    return (
        <Wrapper>
            <Header>
                <Heading>{heading}</Heading>
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
                {areProductsLoading ? "Loading" : (
                    <SliderTrack
                        index={index}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    >
                        {products.map(({ id, description, category, image, price }) => (
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
                )}
            </List>
        </Wrapper >
    );
};