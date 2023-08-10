import {
    Image,
    OptionImage,
    OptionItem,
    OptionLink,
    OptionText,
    Options
} from "./styled";

export const OptionsList = ({ data }) => (
    <Options>
        {data.map(({ id, name, src }) => (
            <OptionItem key={id}>
                <OptionLink>
                    <OptionImage>
                        <Image src={src}></Image>
                    </OptionImage>
                    <OptionText>{name}</OptionText>
                </OptionLink>
            </OptionItem>
        ))}
    </Options>
);