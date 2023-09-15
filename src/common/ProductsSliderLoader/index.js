import { useWindowWidth } from "../../hooks/useWindowWidth";
import { theme } from "../../theme";
import {
    BoxElement,
    Description,
    Header,
    Item,
    List,
    SliderTrack,
    Wrapper
} from "./styled";

export const ProductsSliderLoader = () => {
    const windowWidth = useWindowWidth();
    const mobile = theme.media.mobile;
    const tablet = theme.media.tablet;

    const generateItems = (numberOfElements) => {
        return Array.from({ length: numberOfElements }).map((_, index) => (
            <Item key={index}>
                <BoxElement />
                <Description />
            </Item>
        ));
    };

    return (
        <Wrapper>
            <Header />
            <List>
                <SliderTrack>
                    {windowWidth < mobile ? (
                        generateItems(1)
                    ) : windowWidth < tablet ? (
                        generateItems(2)
                    ) : (
                        generateItems(3)
                    )}
                </SliderTrack>
            </List>
        </Wrapper>
    );
};