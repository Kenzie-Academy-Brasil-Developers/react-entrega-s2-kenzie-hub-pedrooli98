import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route path={"register"}>

      </Route>
      <Route path={"register"}>

      </Route>
    </Switch>

  )
}

export default Routes