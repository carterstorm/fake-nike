import { useState } from "react";
import { imagesSliderData } from "../imagesSliderData";
import { Arrow } from "../Arrow";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";

export const ImagesSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : imagesSliderData.length - 1);
        } else {
            setSlideIndex(slideIndex < imagesSliderData.length - 1 ? slideIndex + 1 : 0);
        };
    };

    return (
        <Wrapper>
            <Arrow
                direction="left"
                onClick={() => handleClick("left")}
            />
            <ImagesContainer>
                {imagesSliderData.map(({ id, src, alt }) => (
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