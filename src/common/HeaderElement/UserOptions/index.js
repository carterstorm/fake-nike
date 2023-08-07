import {
    Button,
    ButtonsItem,
    ButtonsList,
    SearchBox,
    SearchButton,
    SearchInput,
    Wrapper
} from "./styled";

export const UserOptions = () => {
    return (
        <Wrapper>
            <SearchBox>
                <SearchButton></SearchButton>
                <SearchInput placeholder="Wyszukaj" />
            </SearchBox>
            <ButtonsList>
                <ButtonsItem>
                    <Button></Button>
                </ButtonsItem>
                <ButtonsItem>
                    <Button></Button>
                </ButtonsItem>
            </ButtonsList>
        </Wrapper>
    );
};