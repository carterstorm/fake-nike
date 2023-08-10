import { Menu } from "./Menu";
import { LogoContainer } from "./LogoContainer";
import { UserOptions } from "./UserOptions";
import { SideMenu } from "./SideMenu";
import { Navigation } from "./Navigation";

import {
    Header
} from "./styled";

export const HeaderElement = () => (
    <>
        <Menu />
        <Header>
            <LogoContainer />
            <Navigation />
            <UserOptions />
            <SideMenu></SideMenu>
        </Header>
    </>
);