import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MeaningPage from "./pages/MeaningPage";
import Nav from "./components/nav";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:id">
          <MeaningPage />
        </Route>
      </Switch>

      <footer className="h-40 text-center">
        <div className="center">
          Data added by Saparsha pokharel
        </div>
      </footer>
    </div>
  );
}

export default App;
