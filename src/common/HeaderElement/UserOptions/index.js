import { SearchButton } from "../../Button/styled";
import { Buttons } from "./ButtonsList";
import {
    SearchBox,
    SearchInput,
    Wrapper
} from "./styled";

export const UserOptions = () => {
    return (
        <Wrapper>
            <SearchBox>
                <SearchButton />
                <SearchInput placeholder="Wyszukaj" />
            </SearchBox>
            <Buttons />
        </Wrapper>
    );
};