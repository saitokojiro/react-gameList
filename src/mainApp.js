import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameList from "./GameViewList";
import Homes from "./home";
import GameSelected from "./gamelist/GameViewSelected";

import logo, { ReactComponent } from "./logo.svg";
import gameArticle from "./data/article.json";
import "./App.css";

// aide router params https://reactrouter.com/web/example/url-params
// aide router https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Homes} />
            <Route path="/game" exact component={GameList} />
            <Route path="/game/:id" component={GameSelected}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
