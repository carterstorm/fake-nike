import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Arrow } from "../Arrow";
import {
    fetchGetPopularProducts,
    selectArePopularProductsLoading,
    selectIndex,
    selectPopularProducts,
    setNextIndex,
    setPrevIndex
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
                        disabled={index === 0 ? true : false}
                    />
                    <Arrow
                        direction="right"
                        right={"0"}
                        onClick={() => dispatch(setNextIndex())}
                        disabled={index === 7 ? true : false}
                    />
                </Buttons>
            </Header>
            <List>
                {arePopularProductsLoading ? "Loading" : (
                    <SliderTrack
                        index={index}
                    >
                        {popularProducts.map(({ id, description, category, image, price }) => (
                            <Item key={id}>
                                <Link href="#">
                                    <ImageContainer>
                                        <Image
                                            src={image}
                                            alt={description}
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