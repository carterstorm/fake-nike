import { Announcment } from "../../common/Announcment";
import { ImagesSlider } from "./ImagesSlider";
import { Slider } from "./Slider";
import { ThematicSection } from "./ThematicSection";
import { Main } from "./styled";

export const HomePage = () => {
    return (
        <Main>
            <Announcment />
            <ThematicSection />
            <ImagesSlider />
            <Slider />
        </Main>
    );
};