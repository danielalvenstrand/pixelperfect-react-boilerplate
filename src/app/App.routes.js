import React from 'react';
import {Route, Switch} from 'react-router';
import Home from "../home/Home";

const Routes = () => (
    <Switch>
        <Route name="Home" path="/" exact component={Home} />
    </Switch>
);

export default Routes;