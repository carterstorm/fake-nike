import { NikeLogo, Logo, Wrapper } from "./styled";
import nikeLogo from "../../../assets/svg/nike_logo.svg";

export const LogoContainer = () => {
    return (
        <Wrapper>
            <Logo>
                <NikeLogo
                    src={nikeLogo}
                />
            </Logo>
        </Wrapper>
    );
};