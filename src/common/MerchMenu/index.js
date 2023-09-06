import { useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { Category, Heading, Item, Link, List, Wrapper } from "./styled";

export const MerchMenu = ({ fetchLink }) => {
    const { state, data } = useGetData(fetchLink, 1);
    const [visible, setVisible] = useState(false);

    const changeVisibility = () => {
        setVisible(visible => !visible);
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
                                    visible={visible}
                                >
                                    {name}
                                </Heading>
                                <List
                                    visible={visible}
                                >
                                    {elements.map((item, index) => (
                                        <Item
                                            visible={visible}
                                            key={index}>
                                            <Link
                                                visible={visible}
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