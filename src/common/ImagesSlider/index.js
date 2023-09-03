import { Arrow } from "../Arrow";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";
import { useSliderIndex } from "../../hooks/useSliderIndex";

export const ImagesSlider = ({ images }) => {
    const [index, setPrevIndex, setNextIndex] = useSliderIndex(images);

    return (
        <Wrapper>
            <Arrow
                direction="left"
                left={"30"}
                onClick={() => setPrevIndex()}
            />
            <ImagesContainer>
                {images.map(({ id, src, alt }) => (
                    <ImageContainer
                        slideIndex={index}
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
                onClick={() => setNextIndex()}
            />
        </Wrapper>
    );
};