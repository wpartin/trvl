import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
