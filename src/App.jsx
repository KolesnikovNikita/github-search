import Main from "./pages/Main";
import User from "./pages/User";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/search/:repos">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
