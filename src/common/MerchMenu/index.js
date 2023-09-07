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
    const [indexElement, setIndexElement] = useState(0);
    const windowWidth = useWindowWidth();
    const mobile = theme.media.mobile;

    const handleMouseMenuVisibility = () => {
        if (windowWidth > theme.media.mobile) {
            setVisibleMerchMenu(visibleMenu => !visibleMenu);
        } else {
            setVisibleMerchMenu(false);
        };
    };

    const setIndexOfClickedElement = (id) => {
        if (windowWidth < mobile) {
            setIndexElement(id);
            if (indexElement !== id) {
                setIndexElement(id);
            } else {
                setIndexElement(0);
            };
        };
    };

    useEffect(() => {
        if (windowWidth < mobile) {
            setHeightMerchMenu(0);
        } else {
            setHeightMerchMenu(140);
        };
    }, [windowWidth, mobile]);

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
                                    onClick={() => setIndexOfClickedElement(id)}
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