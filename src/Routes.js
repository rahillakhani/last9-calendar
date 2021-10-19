import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CalendarPage from "./page/CalendarPage";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path={"/"}>
                <CalendarPage />
            </Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;
