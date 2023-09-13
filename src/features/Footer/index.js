import { OptionsList } from "./OptionsList";
import { SocialMedia } from "./SocialMedia";
import { SubFooter } from "./SubFooter";
import {
    aboutNike,
    asideOptions,
    helpOptions,
    joinUs
} from "./footerData";
import {
    Aside,
    Container,
    FooterContainer,
    Navigation,
    Wrapper
} from "./styled";

export const Footer = () => (
    <Wrapper>
        <Container>
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
            <SubFooter />
        </Container>
    </Wrapper>
);