import { useSelector } from "react-redux";
import { Container } from "./styled";
import { selectHide } from "../hideSlice";

export const SideMenu = () => {
    const hide = useSelector(selectHide);

    return (
        <Container hide={hide}>

        </Container>
    );
};