import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { Context } from "./Context/AuthContext";

import Login from "./pages/Login";
import Users from "./pages/Users";

export default function Routes() {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!authenticated) {
    return <Route exact path="/login" component={Login} />;
  }

  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/users" component={Users} />
    </Switch>
  );
}
