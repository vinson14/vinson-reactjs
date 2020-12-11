import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Explore from "./pages/Explore";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
    return (
        <Router basename="/">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/experience" component={Experience} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/explore" exact component={Explore} />
            </Switch>
        </Router>
    );
}

export default App;
