import { SocialMediaImage, SocialMediaItem, SocialMediaList } from "./styled";
import facebook from "../../../assets/svg/facebook.svg";
import instagram from "../../../assets/svg/instagram.svg";
import twitter from "../../../assets/svg/twitter.svg";
import youtube from "../../../assets/svg/youtube.svg";

const socialMediaData = [
    { id: 1, image: twitter },
    { id: 2, image: facebook },
    { id: 3, image: youtube },
    { id: 4, image: instagram },
];

export const SocialMedia = () => {
    return (
        <SocialMediaList>
            {socialMediaData.map(({ id, image }) => (
                <SocialMediaItem key={id}>
                    <SocialMediaImage src={image} />
                </SocialMediaItem>
            ))}
        </SocialMediaList>);
};