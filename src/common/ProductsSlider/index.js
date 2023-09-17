import { useGetData } from "../../hooks/useGetData";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useProductsIndex } from "../../hooks/useProductsIndex";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { ProductsSliderLoader } from "./ProductsSliderLoader";
import { HeaderHeading } from "../HeaderHeading";

import {
    Category,
    Description,
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
                            <HeaderHeading
                                heading={heading}
                                index={index}
                                dataLength={dataLength}
                                setPrevIndex={setPrevIndex}
                                setNextIndex={setNextIndex}
                            />
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