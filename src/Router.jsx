import React from "react";
import { Route, Switch } from "react-router-dom";

import Miu from "./Components/Miu";
import Intro from "./Components/Intro";
import PapLovag from "./Components/PapLovag";

const Routes = () => {
    return (
        <Switch>
            <Route component={Intro} exact path="/" />
            <Route component={Miu} path="/miu" />
            <Route component={PapLovag} exact path="/paplovag" />
        </Switch>
    );
};
export default Routes;
