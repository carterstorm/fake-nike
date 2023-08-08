import { Buttons } from "./Buttons";
import { SearchButton, SearchButtonImage } from "./Buttons/styled";
import search_icon from "../../../assets/svg/search_icon.svg";

import {
    SearchBox,
    SearchInput,
    Wrapper
} from "./styled";

export const UserOptions = () => {
    return (
        <Wrapper>
            <SearchBox>
                <SearchButton>
                    <SearchButtonImage
                        alt="search"
                        src={search_icon}
                    />
                </SearchButton>
                <SearchInput
                    placeholder="Wyszukaj" />
            </SearchBox>
            <Buttons></Buttons>
        </Wrapper>
    );
};