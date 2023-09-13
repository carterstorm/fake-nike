import { Info, FooterMenu, Wrapper, Location, Copyright, MenuItem, PinImage, LocationCountry } from "./styled";
import pin from "../../../assets/svg/location_pin.svg";

export const SubFooter = () => {
    return (
        <Wrapper>
            <Info>
                <Location href="#">
                    <PinImage src={pin} alt="Location pin image" />
                    <LocationCountry>Polska</LocationCountry>
                </Location>
                <Copyright>© 2023 Nike, Inc. Wszelkie prawa zastrzeżone</Copyright>
            </Info>
            <FooterMenu>
                <MenuItem></MenuItem>
            </FooterMenu>
        </Wrapper>
    )
};