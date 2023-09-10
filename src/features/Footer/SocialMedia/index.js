import { SocialMediaImage, SocialMediaItem, SocialMediaList } from "./styled";
import facebook from "../../../assets/svg/facebook.svg"


export const SocialMedia = () => {
    return (
        <SocialMediaList>
            <SocialMediaItem>
                <SocialMediaImage src={facebook} />
            </SocialMediaItem>
        </SocialMediaList>);
};