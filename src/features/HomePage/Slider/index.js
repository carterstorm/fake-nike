import { sliderData } from "../../HomePage/sliderData";

import {
    Image,
    ImageContainer,
    ImagesContainer,
    Wrapper
} from "./styled";

export const Slider = () => {

    return (
        <Wrapper>
            <ImagesContainer>
                {sliderData.map(({ id, src, alt }) => (
                    <ImageContainer key={id}>
                        <Image
                            src={src}
                            alt={alt}
                        />
                    </ImageContainer>
                ))}
            </ImagesContainer>
        </Wrapper>
    );
};