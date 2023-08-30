import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTouchHandlers } from "../../hooks/useTouchHandlers";
import { getView } from "../../getView";
import { Arrow } from "../../features/home/HomePage/Arrow";

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

export const Slider = ({ heading, selectData, selectIndex, setPrevIndex, setNextIndex, fetchData }) => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    const index = useSelector(selectIndex);
    const formattedData = getView(data, index);
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
                    onClick={() => dispatch(setPrevIndex())}
                />
                <Number>{index + 1}/{data.length}</Number>
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
                    onClick={() => dispatch(setNextIndex())}
                />
            </Wrapper>
        </>
    );
};