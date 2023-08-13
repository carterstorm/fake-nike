import { useState } from "react";
import { sliderData } from "../../HomePage/sliderData";
import { Arrow } from "../Arrow";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";

export const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderData.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderData.length - 1 ? slideIndex + 1 : 0);
        };
    };

    return (
        <Wrapper>
            <Arrow
                direction="left"
                onClick={() => handleClick("left")}
            />
            <ImagesContainer>
                {sliderData.map(({ id, src, alt }) => (
                    <ImageContainer
                        slideIndex={slideIndex}
                        key={id}
                    >
                        <Image
                            src={src}
                            alt={alt}
                        />
                    </ImageContainer>
                ))}
            </ImagesContainer>
            <Arrow
                direction="right"
                onClick={() => handleClick("right")}
            />
        </Wrapper>
    );
};