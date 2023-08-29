import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTouchHandlers } from "../../../../hooks/useTouchHandlers";
import { getView } from "../../../../getView";
import { Arrow } from "../Arrow";

import {
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

import {
    fetchGetCategoriesData,
    selectCategoriesData,
    selectIndex,
    setNextIndex,
    setPrevIndex
} from "../../categoriesSliderSlice";

export const Slider = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector(selectCategoriesData);
    const index = useSelector(selectIndex);
    const categories = getView(categoriesData, index);
    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    useEffect(() => {
        dispatch(fetchGetCategoriesData());
    }, [dispatch]);

    return (
        <Wrapper>
            <Arrow
                direction={"left"}
                left={"30"}
                onClick={() => dispatch(setPrevIndex())}
            />
            <Number>{index + 1}/{categoriesData.length}</Number>
            <ItemsContainer
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {categories.map(({ id, description, image, alt }, idx) => (
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
    );
};