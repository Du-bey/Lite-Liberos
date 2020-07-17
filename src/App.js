import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import ProductPage from "./components/ProductPage";
import MainPage from "./components/MainPage";
import UserProfile from "./components/UserProfile";
import SellButton from "./components/SellButton";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/buy" component={ProductPage} />
        <Route path="/main" component={MainPage} />
        <Route exact path="/" component={MainPage} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/sellbutton" component={SellButton} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
