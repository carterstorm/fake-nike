import { useState } from "react";
import { Arrow } from "../../features/home/HomePage/Arrow";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";

export const ImagesSlider = ({ images }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const imagesLength = images.length;

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : imagesLength - 1);
        } else {
            setSlideIndex(slideIndex < imagesLength - 1 ? slideIndex + 1 : 0);
        };
    };

    return (
        <Wrapper>
            <Arrow
                direction="left"
                left={"30"}
                onClick={() => handleClick("left")}
            />
            <ImagesContainer>
                {images.map(({ id, src, alt }) => (
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
                right={"30"}
                onClick={() => handleClick("right")}
            />
        </Wrapper>
    );
};