import { Button, EyeIcon, Wrapper } from "./styled";
import eye from "../../assets/svg/eye.svg";

export const ButtonElement = ({ children, eyeIcon }) => (
    <Button>
        <Wrapper>
            {eyeIcon ? <EyeIcon color="red" src={eye} /> : null}
            {children}
        </Wrapper>
    </Button>
);