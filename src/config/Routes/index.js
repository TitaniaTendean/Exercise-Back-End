import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Registrasi from "../../pages/Registrasi";
import About from "../../pages/About";
import AddUser from "../../pages/Adduser";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/AddUser">
          <TambahUsers />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registrasi">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;