import { useDispatch, useSelector } from "react-redux";
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
    TextBox,
    Title,
    Wrapper
} from "./styled";
import { fetchGetPopularProducts, selectArePopularProductsLoading, selectPopularProducts } from "../../productsSliderSlice";
import { useEffect } from "react";

export const ProductsSlider = () => {
    const dispatch = useDispatch();
    const popularProducts = useSelector(selectPopularProducts);
    const arePopularProductsLoading = useSelector(selectArePopularProductsLoading);

    useEffect(() => {
        dispatch(fetchGetPopularProducts())
    }, [dispatch]);

    return (
        <Wrapper>
            <Header>
                <Heading>Popularne w tym tygodniu</Heading>
                <Buttons>
                    <Arrow direction="left" left={"0"} />
                    <Arrow direction="right" right={"0"} />
                </Buttons>
            </Header>
            <List>
                {arePopularProductsLoading ? "Loading" : (
                    <>
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
                    </>
                )}
            </List>
        </Wrapper>
    );
};