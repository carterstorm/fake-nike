import { useArrowVisibility } from "../../hooks/useArrowVisibility";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { Arrow } from "../Arrow";
import { Block, Buttons, Header, Heading } from "./styled";

export const HeaderHeading = ({ heading, index, dataLength, setPrevIndex, setNextIndex, products, membership }) => {
    const windowWidth = useWindowWidth();
    const [leftArrowVisibility, rightArrowVisibility] = useArrowVisibility(index, windowWidth, dataLength);

    if (!products && !membership) {
        return (
            <Header>
                <Heading>{heading}</Heading>
                <Buttons>
                    <Arrow
                        direction="left"
                        left={"0"}
                        onClick={() => setPrevIndex()}
                        disabled={leftArrowVisibility}
                    />
                    <Arrow
                        direction="right"
                        right={"0"}
                        onClick={() => setNextIndex()}
                        disabled={rightArrowVisibility}
                    />
                </Buttons>
            </Header>
        )
    } else {
        return (
            <>
                {heading ? (
                    < Header >
                        <Heading>{heading}</Heading>
                    </Header >
                ) : (<Block />)}
            </>
        )
    };
};