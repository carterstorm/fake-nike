import homePageImage1 from "../../../assets/images/homepage_image_1.jpg";
import homePageImage2 from "../../../assets/images/homepage_image_2.jpg";
import homePageImage3 from "../../../assets/images/homepage_image_3.jpg";

import { useState } from "react";
import { Arrow } from "../Arrow";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";

export const imagesSliderData = [
    { id: 1, src: homePageImage1, alt: "Shoes - Nike Air Force 1" },
    { id: 2, src: homePageImage2, alt: "Women playing soccer" },
    { id: 3, src: homePageImage3, alt: "Running man" },
];

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