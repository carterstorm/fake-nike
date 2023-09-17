import { getView } from "../../../getView";
import { useTouchHandlers } from "../../../hooks/useTouchHandlers";
import {
    Image,
    Item,
    ItemImage,
    ItemLink,
    ItemText,
    ItemsContainer,
    Number,
    Text
} from "./styled";

export const Items = ({ index, numberOfItems, data, setPrevIndex, setNextIndex }) => {
    const formattedData = getView(data || [], index);
    const [
        handleTouchStart,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp
    ] = useTouchHandlers(setPrevIndex, setNextIndex);

    return (
        <ItemsContainer
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            numberOfItems={numberOfItems}
        >
            <Number>{index + 1}/{numberOfItems}</Number>
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
    );
};