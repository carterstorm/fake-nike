import { titleAsideOptions } from "../footerData";
import { useWindowWidth } from "../../../hooks/useWindowWidth"
import { theme } from "../../../theme";
import { Anchor, AnchorButton, Item, List, SubTitleContainer, TitleContainer, ToogleIcon } from "./styled";
import plus from "../../../assets/svg/plus.svg";
import minus from "../../../assets/svg/minus.svg";

export const OptionsList = ({ titleOptions, subTitle, index }) => {
    const windowWidth = useWindowWidth();
    const mobile = theme.media.mobile;

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
                                    href="#">
                                    {titleOptions[index].title}
                                    <ToogleIcon
                                        src={plus} />
                                </AnchorButton>
                            )
                            :
                            (
                                <Anchor
                                    href="#">
                                    {titleOptions[index].title}
                                </Anchor>)}
                    </Item>
                </TitleContainer>
                {subTitle.map(({ id, title }) => (
                    <SubTitleContainer
                        key={id}>
                        <Item>
                            <Anchor
                                colorItems
                                href="#"
                            >
                                {title}
                            </Anchor>
                        </Item>
                    </SubTitleContainer>
                ))}
            </List>
        )
    }
};