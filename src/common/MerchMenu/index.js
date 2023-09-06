import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { theme } from "../../theme";

import {
    Category,
    Heading,
    Item,
    Link,
    List,
    Wrapper
} from "./styled";

export const MerchMenu = ({ fetchLink }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const [visibleMenu, setVisibleMenu] = useState(false);
    const windowWidth = useWindowWidth();

    const handleMouseMenuVisibility = () => {
        if (windowWidth > theme.media.mobile) {
            setVisibleMenu(visibleMenu => !visibleMenu);
        } else {
            setVisibleMenu(false);
        };
    };

    return (
        <Wrapper
            onMouseEnter={handleMouseMenuVisibility}
            onMouseLeave={handleMouseMenuVisibility}
        >
            {state === "loading" ?
                (<>Loading</>)
                :
                state === "error" ?
                    (<>Error</>)
                    :
                    (<>
                        {data.map(({ id, name, elements }) => (
                            <Category key={id}>
                                <Heading
                                    visibleMenu={visibleMenu}
                                >
                                    {name}
                                </Heading>
                                <List
                                    visibleMenu={visibleMenu}
                                >
                                    {elements.map((item, index) => (
                                        <Item
                                            visibleMenu={visibleMenu}
                                            key={index}>
                                            <Link
                                                visibleMenu={visibleMenu}
                                                href="#">
                                                {item}
                                            </Link>
                                        </Item>
                                    ))}
                                </List>
                            </Category>
                        ))}
                    </>)}
        </Wrapper>
    );
};