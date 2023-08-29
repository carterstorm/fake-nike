import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Arrow } from "../Arrow";
import {
    fetchGetPopularProducts,
    selectArePopularProductsLoading,
    selectIndex,
    selectLeftArrowVisibility,
    selectPopularProducts,
    selectRightArrowVisibility,
    selectTouchPointX,
    selectTouchPointY,
    setIndex,
    setTouchPointX,
    setTouchPointY,
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
    const touchPointX = useSelector(selectTouchPointX);
    const touchPointY = useSelector(selectTouchPointY);

    useEffect(() => {
        dispatch(fetchGetPopularProducts());
    }, [dispatch]);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch]);

    const handleTouchStart = (event) => {
        dispatch(setTouchPointX(event.touches[0].clientX));
        dispatch(setTouchPointY(event.touches[0].clientY));
    };

    const handleTouchEnd = (event) => {
        const deltaX = event.changedTouches[0].clientX - touchPointX;
        const deltaY = event.changedTouches[0].clientY - touchPointY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                dispatch(setIndex("left"));
            } else {
                dispatch(setIndex("right"));
            };
        };
    };

    const handleMouseDown = (event) => {
        dispatch(setTouchPointX(event.clientX));
    };

    const handleMouseUp = (event) => {
        const deltaX = event.clientX - touchPointX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                dispatch(setIndex("left"));
            } else {
                dispatch(setIndex("right"));
            };
        };
    };

    return (
        <Wrapper>
            <Header>
                <Heading>Popularne w tym tygodniu</Heading>
                <Buttons>
                    <Arrow
                        direction="left"
                        left={"0"}
                        onClick={() => dispatch(setIndex("left"))}
                        disabled={leftArrowVisibility}
                    />
                    <Arrow
                        direction="right"
                        right={"0"}
                        onClick={() => dispatch(setIndex("right"))}
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