import { titleAsideOptions } from "../footerData";
import { Anchor, Item, List, SubTitleContainer, TitleContainer } from "./styled";

export const OptionsList = ({ titleOptions, subTitle, index }) => {
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
        );
    } else {
        return (
            <List>
                <TitleContainer>
                    <Item>
                        <Anchor href="#">
                            {titleOptions[index].title}
                        </Anchor>
                    </Item>
                </TitleContainer>
                {subTitle.map(({ id, title }) => (
                    <SubTitleContainer key={id}>
                        <Item>
                            <Anchor
                                otherItems
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