import { OptionsList } from "./OptionsList";
import { SocialMedia } from "./SocialMedia";
import { SubFooter } from "./SubFooter";
import {
    subTitleAboutNike,
    subTitleHelpOptions,
    subTitleJoinUs,
    titleAsideOptions,
    titleOptions
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
                            titleOptions={titleAsideOptions}
                        />
                    </Aside>
                    <OptionsList
                        titleOptions={titleOptions}
                        subTitle={subTitleHelpOptions}
                        index={0}
                    />
                    <OptionsList
                        titleOptions={titleOptions}
                        subTitle={subTitleAboutNike}
                        index={1}
                    />
                    <OptionsList
                        titleOptions={titleOptions}
                        subTitle={subTitleJoinUs}
                        index={2}
                    />
                </Navigation>
                <SocialMedia />
            </FooterContainer>
            <SubFooter />
        </Container>
    </Wrapper>
);