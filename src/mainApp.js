import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameList from "./gamelist/GameViewList";
import Homes from "./Home";
import GameSelected from "./gamelist/gamelistselected/GameViewSelected";
import Login from "./auth/Login";

import logo, { ReactComponent } from "./logo.svg";
import gameArticle from "./data/article.json";
import "./App.css";

// aide router params https://reactrouter.com/web/example/url-params
// aide router https://www.youtube.com/watch?v=Law7wfdg_ls&ab_channel=DevEd
class App extends React.Component {
  verification = () => {
    let messageObject = [];
    console.log(localStorage.getItem("user/account"));
    let getUser = JSON.parse(localStorage.getItem("user/account"));
    if (getUser === null) {
      messageObject.push({
        userLog: "",
        userPass: "",
      });
      let messageJson = JSON.stringify(messageObject);
      localStorage.setItem(`user/account`, messageJson);
    }
    if (getUser !== null && getUser[0].userLog !== "") {
      console.log("connected");
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
    } else {
      return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
            </Switch>
          </Router>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <this.verification></this.verification>
      </div>
    );
  }
}

export default App;
