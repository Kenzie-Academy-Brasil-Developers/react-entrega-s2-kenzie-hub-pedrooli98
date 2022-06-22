import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Routes = ({loading}) => {
  return(
    <Switch>
      <Route exact path="/">
        <Login
        loading={loading}
        />
      </Route>
      <Route path={"/"}>
        <Register
        loading={loading}
        />
      </Route>
      <Route path={"/home"}>
        <Home/>
      </Route>
    </Switch>

  )
}

export default Routes