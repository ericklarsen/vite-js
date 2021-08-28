import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
