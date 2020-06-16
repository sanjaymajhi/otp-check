import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EnterMobile from "./components/EnterMobile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={EnterMobile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
