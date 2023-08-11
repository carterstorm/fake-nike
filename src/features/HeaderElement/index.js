import { DesktopMenu } from "./DesktopMenu";
import { LogoContainer } from "./LogoContainer";
import { UserOptions } from "./UserOptions";
import { SideMenu } from "./SideMenu";
import { Navigation } from "./Navigation";
import { Announcment } from "../Announcment";

import {
    Header
} from "./styled";

export const HeaderElement = () => (
    <>
        <DesktopMenu />
        <Header>
            <LogoContainer />
            <Navigation />
            <UserOptions />
            <SideMenu></SideMenu>
        </Header>
        <Announcment />
    </>
);