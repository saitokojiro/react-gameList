import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import GameList from "./GameViewList";
import logo, { ReactComponent } from "./logo.svg";
import gameArticle from "./data/article.json";
import "./App.css";

function Game(props) {
  return <h2>Home {props.idPage}</h2>;
}

// aide router params https://reactrouter.com/web/example/url-params
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={GameList} />
            <Route path="/game/:id" component={GameList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
