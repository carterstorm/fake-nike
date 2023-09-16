import { useGetData } from "../../hooks/useGetData";
import { useSliderIndex } from "../../hooks/useSliderIndex";
import { Arrow } from "../Arrow";
import { HeaderHeading } from "../HeaderHeading";
import { Items } from "./Items";

import {
    Wrapper
} from "./styled"

export const Slider = ({ heading, fetchLink, numberOfItems }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const [index, setPrevIndex, setNextIndex] = useSliderIndex(data);

    return (
        <Wrapper>
            {state === "loading" ?
                (<>Loading</>)
                :
                state === "error" ?
                    (<>Error</>)
                    :
                    (
                        <>
                            <HeaderHeading
                                heading={heading}
                                membership
                            />
                            <Arrow
                                direction={"left"}
                                left={"30"}
                                onClick={() => setPrevIndex()}
                            />
                            <Items
                                index={index}
                                fetchLink={fetchLink}
                                numberOfItems={numberOfItems}
                                data={data}
                                setPrevIndex={setPrevIndex}
                                setNextIndex={setNextIndex}
                            />
                            <Arrow
                                direction={"right"}
                                right={"30"}
                                onClick={() => setNextIndex()}
                            />
                        </>
                    )}
        </Wrapper>
    );
};