import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sorting from "./Components/Sorting";
import Search from "./Components/Search";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sorting">
          <Sorting />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
