import { titleAsideOptions } from "../footerData";
import { useWindowWidth } from "../../../hooks/useWindowWidth"
import { theme } from "../../../theme";
import plus from "../../../assets/svg/plus.svg";
import minus from "../../../assets/svg/minus.svg";
import { Anchor, AnchorButton, Item, List, SubTitleContainer, TitleContainer, ToogleIcon } from "./styled";
import { useState } from "react";

export const OptionsList = ({ titleOptions, subTitle, index }) => {
    const [openOptionIndex, setOpenOptionIndex] = useState(null);
    const windowWidth = useWindowWidth();
    const mobile = theme.media.mobile;

    const handleOptionClick = (clickedIndex) => {
        if (openOptionIndex === clickedIndex) {
            setOpenOptionIndex(null);
        } else {
            setOpenOptionIndex(clickedIndex);
        };
    };

    if (titleOptions === titleAsideOptions) {
        return (
            <List>
                {titleAsideOptions.map(({ id, title }) => (
                    <Item key={id}>
                        <Anchor
                            href="#"
                        >
                            {title}
                        </Anchor>
                    </Item>
                ))}
            </List>
        )
    } else {
        return (
            <List>
                <TitleContainer>
                    <Item>
                        {windowWidth < mobile ?
                            (
                                <AnchorButton as="button"
                                    href="#"
                                    onClick={() => handleOptionClick(index)}
                                >
                                    {titleOptions[index].title}
                                    <ToogleIcon
                                        src={openOptionIndex === index ? minus : plus} />
                                </AnchorButton>
                            )
                            :
                            (
                                <Anchor
                                    href="#">
                                    {titleOptions[index].title}
                                </Anchor>)
                        }
                    </Item>
                </TitleContainer>
                {(windowWidth < mobile) && (openOptionIndex === index) &&
                    (
                        subTitle.map(({ id, title }) => (
                            <SubTitleContainer key={id}>
                                <Item>
                                    <Anchor colorItems href="#">
                                        {title}
                                    </Anchor>
                                </Item>
                            </SubTitleContainer>
                        ))
                    )}
                {windowWidth >= mobile &&
                    (
                        subTitle.map(({ id, title }) => (
                            <SubTitleContainer key={id}>
                                <Item>
                                    <Anchor colorItems href="#">
                                        {title}
                                    </Anchor>
                                </Item>
                            </SubTitleContainer>
                        ))
                    )}
            </List>
        )
    }
};