import React, { Component } from "react";
import "./App.css";
import "./globals/global.scss";
//Import all needed Component for this tutorial
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import MainPage from "./pages/index/";
import UsersPage from "./pages/users/users";
import NotFoundPage from "./pages/404/404";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/users' component={UsersPage} />
                        <Route exact path='/404' component={NotFoundPage} />
                        <Redirect to='/404' />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
