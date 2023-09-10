import { OptionsList } from "./OptionsList";
import { SocialMedia } from "./SocialMedia";
import {
    aboutNike,
    asideOptions,
    helpOptions,
    joinUs
} from "./footerData";
import {
    Aside,
    FooterContainer,
    Navigation,
    Wrapper
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <FooterContainer>
            <Navigation>
                <Aside>
                    <OptionsList
                        optionsData={asideOptions}
                    />
                </Aside>
                <OptionsList
                    optionsData={helpOptions}
                    firstItem
                    otherItems
                />
                <OptionsList
                    optionsData={aboutNike}
                    firstItem
                    otherItems
                />
                <OptionsList
                    optionsData={joinUs}
                    firstItem
                    otherItems
                />
            </Navigation>
            <SocialMedia />
        </FooterContainer>
    </Wrapper>
);