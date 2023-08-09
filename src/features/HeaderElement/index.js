import { Menu } from "./Menu";
import { LogoContainer } from "./LogoContainer";
import { Navigation } from "./Navigation";
import { UserOptions } from "./UserOptions";
import { SideMenu } from "./SideMenu";

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