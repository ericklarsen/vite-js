import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CNBC from "./pages/CNBC";
import CNN from "./pages/CNN";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cnbc">
          <CNBC />
        </Route>
        <Route path="/">
          <CNN />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
