import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo, { ReactComponent } from "./logo.svg";
import gameArticle from "./data/article.json";
import "./App.css";

function Game() {
  return <h2>Home</h2>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameArticle,
      isOldestFirst: true,
    };
  }

  sortGameToOldDate = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.date.years > b.date.years),
    });
  };

  sortGameToNewDate = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.date.years < b.date.years),
    });
  };

  sortGameAlphabetically = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.name > b.name),
    });
  };

  sortGameLowPrice = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.price > b.price),
    });
  };

  sortGameHighPrice = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.price < b.price),
    });
  };

  viewGameList = () => {
    const { gameList } = this.state;

    let viewGame = gameList.map((gli, index) => (
      <div
        className="card col-sm-4 m-5"
        style={{ width: 10 + "rem" }}
        key={gli.id}
      >
        <img
          src={gli.img}
          className="img-thumbnail"
          alt="..."
          style={{ width: 80 + "%", margin: "auto" }}
        />

        <div className="card-body">
          <h5 className="card-title">{gli.name}</h5>
          <p className="card-text">{gli.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {gli.date.day + " - " + gli.date.months + " - " + gli.date.years}
          </li>
          <li className="list-group-item">{gli.plateform}</li>
          <li className="list-group-item" key={index}>
            {gli.price}
          </li>
        </ul>
        <div className="card-body">
          <Router>
            <Link to={"/game/" + index}>comment</Link>

            <Switch>
              <Route path={"/game/" + index}>
                <Game />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    ));
    return <div className="row">{viewGame}</div>;
  };

  render() {
    return (
      <div className="App container">
        <br />
        <div>
          <button
            className="btn btn-secondary btn-lg mr-2 ml-2"
            onClick={this.sortGameToNewDate}
          >
            sort by new date
          </button>
          <button
            className="btn btn-secondary btn-lg mr-2 ml-2"
            onClick={this.sortGameToOldDate}
          >
            sort by old date
          </button>

          <button
            className="btn btn-secondary btn-lg mr-2 ml-2"
            onClick={this.sortGameAlphabetically}
          >
            sort by Alphabetically
          </button>
          <button
            className="btn btn-secondary btn-lg mr-2 ml-2"
            onClick={this.sortGameLowPrice}
          >
            sort by low price
          </button>
          <button
            className="btn btn-secondary btn-lg mr-2 ml-2"
            onClick={this.sortGameHighPrice}
          >
            sort by high price
          </button>
        </div>

        <br />
        <this.viewGameList />
      </div>
    );
  }
}

export default App;
