import { Route, Switch } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";
import { LogoContainer } from "./LogoContainer";
import { UserOptions } from "./UserOptions";
import { SideMenu } from "./SideMenu";
import { Navigation } from "./Navigation";
import { Announcment } from "./Announcment";
import { HomePage } from "../HomePage";

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

        <Switch>
            <Route exact path={"/"}>
                <HomePage />
            </Route>
        </Switch>
    </>
);