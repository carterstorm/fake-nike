import { Button, EyeIcon, Wrapper } from "./styled";
import eye from "../../assets/svg/eye.svg";

export const ButtonElement = ({ children, eyeIcon, bright }) => (
    <Button
        bright={bright}>
        <Wrapper>
            {eyeIcon ? <EyeIcon src={eye} /> : null}
            {children}
        </Wrapper>
    </Button>
);