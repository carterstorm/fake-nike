import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { theme } from "../../../theme";
import {
    Header,
    Item,
    ItemsContainer,
    TextContainer,
    Wrapper
} from "./styled";

export const SliderLoader = () => {
    const windowWidth = useWindowWidth();
    const desktopMax = theme.media.desktopMax;

    const generateItems = (numberOfElements) => {
        return (
            <ItemsContainer numberOfElements={numberOfElements}>
                {Array.from({ length: numberOfElements }).map((_, index) => (
                    <Item key={index} />
                ))}
            </ItemsContainer>
        )
    };

    return (
        <Wrapper>
            <Header />
            {windowWidth < desktopMax ?
                (generateItems(7))
                :
                (generateItems(5))
            }
            <TextContainer />
        </Wrapper>
    );
};