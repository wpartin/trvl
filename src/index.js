import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
