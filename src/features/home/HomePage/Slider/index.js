import { useEffect, useRef } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchGetCategoriesData, selectCategoriesData, selectIndex, setNextIndex, setPrevIndex } from "../../categoriesSliderSlice";

export const Slider = () => {
    const dispatch = useDispatch();
    const categoriesData = useSelector(selectCategoriesData);
    const index = useSelector(selectIndex);
    const categories = getView(categoriesData, index);

    useEffect(() => {
        dispatch(fetchGetCategoriesData());
    }, [dispatch]);

    const touchRef = useRef({
        startX: 0,
        startY: 0,
    });

    const handleTouchStart = (event) => {
        touchRef.current.startX = event.touches[0].clientX;
        touchRef.current.startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
        const deltaX = event.changedTouches[0].clientX - touchRef.current.startX;
        const deltaY = event.changedTouches[0].clientY - touchRef.current.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                dispatch(setPrevIndex());
            } else {
                dispatch(setNextIndex());
            };
        };
    };

    const handleMouseDown = (event) => {
        touchRef.current.startX = event.clientX;
    };

    const handleMouseUp = (event) => {
        const deltaX = event.clientX - touchRef.current.startX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                dispatch(setPrevIndex());
            } else {
                dispatch(setNextIndex());
            };
        };
    };

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
                    <Item key={idx}>
                        <ItemLink href="#">
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