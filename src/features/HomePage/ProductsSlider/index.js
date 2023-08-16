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

export const ProductsSlider = () => {
    return (
        <Wrapper>
            <Header>
                <Heading>Popularne w tym tygodniu</Heading>
                <Buttons>

                </Buttons>
            </Header>
            <List>
                <Item>
                    <Link href="#">
                        <ImageContainer>
                            <Image />
                        </ImageContainer>
                        <Description>
                            <TextBox>
                                <Title>Nike Dunk Low</Title>
                                <Category>Buty damskie</Category>
                            </TextBox>
                            <PriceBox>
                                <Price>549,99zł</Price>
                            </PriceBox>
                        </Description>
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        <ImageContainer>
                            <Image />
                        </ImageContainer>
                        <Description>
                            <TextBox>
                                <Title>Nike Dunk Low</Title>
                                <Category>Buty damskie</Category>
                            </TextBox>
                            <PriceBox>
                                <Price>549,99zł</Price>
                            </PriceBox>
                        </Description>
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        <ImageContainer>
                            <Image />
                        </ImageContainer>
                        <Description>
                            <TextBox>
                                <Title>Nike Dunk Low</Title>
                                <Category>Buty damskie</Category>
                            </TextBox>
                            <PriceBox>
                                <Price>549,99zł</Price>
                            </PriceBox>
                        </Description>
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        <ImageContainer>
                            <Image />
                        </ImageContainer>
                        <Description>
                            <TextBox>
                                <Title>Nike Dunk Low</Title>
                                <Category>Buty damskie</Category>
                            </TextBox>
                            <PriceBox>
                                <Price>549,99zł</Price>
                            </PriceBox>
                        </Description>
                    </Link>
                </Item>

                <Item>
                    <Link href="#">
                        <ImageContainer>
                            <Image />
                        </ImageContainer>
                        <Description>
                            <TextBox>
                                <Title>Nike Dunk Low</Title>
                                <Category>Buty damskie</Category>
                            </TextBox>
                            <PriceBox>
                                <Price>549,99zł</Price>
                            </PriceBox>
                        </Description>
                    </Link>
                </Item>
            </List>
        </Wrapper>
    );
};