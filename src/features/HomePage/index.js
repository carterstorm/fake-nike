import { Announcment } from "../../common/Announcment";
import { Slider } from "./Slider";
import { ThematicSection } from "./ThematicSection";
import { Main } from "./styled";

export const HomePage = () => {
    return (
        <Main>
            <Announcment />
            <ThematicSection />
            <Slider />
        </Main>
    );
};