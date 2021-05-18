import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Hero />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
