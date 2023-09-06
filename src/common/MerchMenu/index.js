import { useEffect, useState } from "react";
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
    const [visibleMerchMenu, setVisibleMerchMenu] = useState(false);
    const [heightMerchMenu, setHeightMerchMenu] = useState(140);
    const windowWidth = useWindowWidth();

    const handleMouseMenuVisibility = () => {
        if (windowWidth > theme.media.mobile) {
            setVisibleMerchMenu(visibleMenu => !visibleMenu);
        } else {
            setVisibleMerchMenu(false);
        };
    };

    useEffect(() => {
        if (windowWidth < theme.media.mobile) {
            setHeightMerchMenu(0);
        } else {
            setHeightMerchMenu(140);
        };
    }, [windowWidth]);

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
                                    visibleMerchMenu={visibleMerchMenu}
                                >
                                    {name}
                                </Heading>
                                <List
                                    visibleMerchMenu={visibleMerchMenu}
                                    heightMerchMenu={heightMerchMenu}
                                >
                                    {elements.map((item, index) => (
                                        <Item
                                            visibleMerchMenu={visibleMerchMenu}
                                            key={index}>
                                            <Link
                                                visibleMerchMenu={visibleMerchMenu}
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