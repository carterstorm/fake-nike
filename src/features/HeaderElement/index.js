import { Menu } from "./Menu";
import { LogoContainer } from "./LogoContainer";
import { Navigation } from "./Navigation";
import { UserOptions } from "./UserOptions";

import {
    Header,
} from "./styled";

export const HeaderElement = () => (
    <>
        <Menu />
        <Header>
            <LogoContainer />
            <Navigation />
            <UserOptions />
        </Header>
    </>
);