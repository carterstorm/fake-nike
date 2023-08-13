import { Announcment } from "../../common/Announcment";
import { ThematicSection } from "./ThematicSection";
import { Main } from "./styled";

export const HomePage = () => {
    return (
        <Main>
            <Announcment />
            <ThematicSection />
        </Main>
    );
};