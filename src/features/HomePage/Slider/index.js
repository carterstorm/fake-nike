import { useRef, useState } from "react";
import { getView } from "../../../getView";
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

const categoriesData = [
    {
        id: 1,
        description: "Ubrania do biegania",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/68f7f042-6926-4425-b298-e14b033fedc7/oficjalna-strona-internetowa-nike.jpg",
        alt: "Ubrania do biegania",
    },
    {
        id: 2,
        description: "Kurtki",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/aa5512db-0ba9-4f20-92dd-ace2b121fe2a/oficjalna-strona-internetowa-nike.jpg",
        alt: "Kurtki",
    },
    {
        id: 3,
        description: "Legginsy do biegania",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/12ea9316-c3ee-44a0-8afc-5ae98e4d86f5/oficjalna-strona-internetowa-nike.jpg",
        alt: "Legginsy do biegania",
    },
    {
        id: 4,
        description: "Spodenki",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/ad52dda7-0566-4923-bc47-699d547bccbb/oficjalna-strona-internetowa-nike.jpg",
        alt: "Spodenki",
    },
    {
        id: 5,
        description: "Koszulki",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_500,c_limit/28c98169-9927-45bb-9634-41fa099d6782/oficjalna-strona-internetowa-nike.jpg",
        alt: "Koszulki",
    },
    {
        id: 6,
        description: "Produkty sportowe",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/392db850-0c9e-4dc1-8ef9-2a02f012d62e/oficjalna-strona-internetowa-nike.jpg",
        alt: "Produkty sportowe",
    },
    {
        id: 7,
        description: "Buty sportowe i treningowe",
        image: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/a96cfb29-c149-4b69-a5c2-af875a79073c/oficjalna-strona-internetowa-nike.jpg",
        alt: "Buty sportowe i treningowe",
    },
];

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const categories = getView(categoriesData, index);
    const categoriesLength = categories.length;

    const touchRef = useRef({
        startX: 0,
        startY: 0,
    });

    const handlePrevClick = () => {
        index - 1 < 0 ? setIndex(categoriesLength - 1) : setIndex(index - 1)
    };

    const handleNextClick = () => {
        index + 1 >= categoriesLength ? setIndex(0) : setIndex(index + 1)
    };

    const handleTouchStart = (event) => {
        touchRef.current.startX = event.touches[0].clientX;
        touchRef.current.startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event) => {
        const deltaX = event.changedTouches[0].clientX - touchRef.current.startX;
        const deltaY = event.changedTouches[0].clientY - touchRef.current.startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) {
                handlePrevClick();
            } else {
                handleNextClick();
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
                handlePrevClick();
            } else {
                handleNextClick();
            };
        };
    };

    const handleDragStart = (event) => {
        event.preventDefault();
    };

    return (
        <Wrapper>
            <Arrow
                direction={"left"}
                left={"30"}
                onClick={handlePrevClick}
            />
            <Number>{index + 1}/{categoriesLength}</Number>
            <ItemsContainer
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onDragStart={handleDragStart}
            >
                {categories.map(({ id, description, image, alt }) => (
                    <Item
                        key={id}>
                        <ItemLink href="#">
                            <ItemImage>
                                <Image
                                    src={image}
                                    alt={alt}
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
                onClick={handleNextClick}
            />
        </Wrapper>
    );
};