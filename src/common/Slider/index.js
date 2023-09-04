import { useGetData } from "../../hooks/useGetData";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { useSliderIndex } from "../../hooks/useSliderIndex";
import { getView } from "../../getView";
import { Arrow } from "../Arrow";

import {
    Heading,
    HeadingContainer,
    Image,
    Item,
    ItemImage,
    ItemLink,
    ItemText,
    ItemsContainer,
    Number,
    Text,
    Wrapper
} from "./styled"

export const Slider = ({ heading, fetchLink, numberOfItems }) => {
    const { data } = useGetData(fetchLink, 1);
    const [index, setPrevIndex, setNextIndex] = useSliderIndex(data);
    const formattedData = getView(data || [], index);

    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    return (
        <>
            {heading ? (
                <HeadingContainer>
                    <Heading>{heading}</Heading>
                </HeadingContainer>
            ) : null}
            <Wrapper>
                <Arrow
                    direction={"left"}
                    left={"30"}
                    onClick={() => setPrevIndex()}
                />
                <Number>{index + 1}/{numberOfItems}</Number>
                <ItemsContainer
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {formattedData.map(({ id, description, image, alt }, idx) => (
                        <Item
                            key={idx}>
                            <ItemLink
                                href="#">
                                <ItemImage>
                                    <Image
                                        src={image}
                                        alt={alt}
                                        draggable={false}
                                    />
                                </ItemImage>
                                <ItemText>
                                    <Text>
                                        {id === index + 1 ? description : null}
                                    </Text>
                                </ItemText>
                            </ItemLink>
                        </Item>
                    ))}
                </ItemsContainer>
                <Arrow
                    direction={"right"}
                    right={"30"}
                    onClick={() => setNextIndex()}
                />
            </Wrapper>
        </>
    );
};