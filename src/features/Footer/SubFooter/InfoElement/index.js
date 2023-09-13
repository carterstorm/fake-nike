import pin from "../../../../assets/svg/location_pin.svg";
import { Copyright, Info, Location, LocationCountry, PinImage } from "./styled";

export const InfoElement = () => (
    <Info>
        <Location href="#">
            <PinImage src={pin} alt="Location pin image" />
            <LocationCountry>Polska</LocationCountry>
        </Location>
        <Copyright>© 2023 Nike, Inc. Wszelkie prawa zastrzeżone</Copyright>
    </Info>
);