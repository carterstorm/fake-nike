import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
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

    const changeVisibility = () => {
        setVisibleMenu(visibleMenu => !visibleMenu);
    };

    return (
        <Wrapper
            onMouseEnter={changeVisibility}
            onMouseLeave={changeVisibility}
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