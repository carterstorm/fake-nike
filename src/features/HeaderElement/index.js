import { Route, Switch } from "react-router-dom";
import { DesktopMenu } from "./DesktopMenu";
import { NikeContainer } from "./LogoContainer";
import { UserOptions } from "./UserOptions";
import { SideMenu } from "./SideMenu";
import { Navigation } from "./Navigation";
import { HomePage } from "../HomePage";

import {
    Header
} from "./styled";

export const HeaderElement = () => (
    <>
        <DesktopMenu />
        <Header>
            <NikeContainer />
            <Navigation />
            <UserOptions />
            <SideMenu></SideMenu>
        </Header>

        <Switch>
            <Route exact path={"/"}>
                <HomePage />
            </Route>
        </Switch>
    </>
);