import { Anchor, Item, List } from "./styled";

export const OptionsList = ({ optionsData, firstItem, otherItems }) => {
    const setFirstItem = (id) => {
        if (firstItem && id === 1) {
            return true;
        };
    };

    const setOthersItems = (id) => {
        if (otherItems && id !== 1) {
            return true;
        };
    };

    return (
        <List>
            {optionsData.map(({ id, itemText }) => (
                <Item key={id}>
                    <Anchor
                        firstItem={setFirstItem(id)}
                        otherItems={setOthersItems(id)}
                        href="#"
                    >
                        {itemText}
                    </Anchor>
                </Item>
            ))}
        </List>
    )
};