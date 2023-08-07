import { NikeLogo } from "../../../assets/svg/Nike_Logo";
import { Logo, Wrapper } from "./styled";

export const LogoContainer = () => {
    return (
        <Wrapper>
            <Logo>
                <NikeLogo />
            </Logo>
        </Wrapper>
    );
};