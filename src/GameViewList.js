import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import gameArticle from "./data/article.json";
import "./App.css";

function Child() {
  let { id } = useParams();
  return console.log(id);
}

export class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameArticle,
      gameId: gameArticle,
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

  viewGameSelect = (props) => {
    const { gameId } = this.state;
    //console.log(gameId);
    for (let i = 0; i < gameId.length; i++) {
      console.log(gameId[i].id);
      console.log(gameId[i].name);
      if (gameId[i].id === props.id) {
        return (
          <div
            className="card mx-auto"
            style={{ width: 50 + "rem" }}
            key={gameId[i].id}
          >
            <img
              src={gameId[i].img}
              className="img-thumbnail"
              alt="..."
              style={{ width: 80 + "%", margin: "auto" }}
            />

            <div className="card-body">
              <h5 className="card-title">{gameId[i].name}</h5>
              <p className="card-text">{gameId[i].description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {gameId[i].date.day +
                  " - " +
                  gameId[i].date.months +
                  " - " +
                  gameId[i].date.years}
              </li>
              <li className="list-group-item">{gameId[i].plateform}</li>
              <li className="list-group-item">{gameId[i].price}</li>
            </ul>
          </div>
        );
      }
    }
  };

  viewGameList = () => {
    const { gameList } = this.state;
    console.log(gameList);
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
          <Link to={"/game/" + gli.id}>comment</Link>
        </div>
      </div>
    ));
    return <div className="row ml-5">{viewGame}</div>;
  };

  render() {
    return (
      <div className="App container">
        <br />
        <this.viewGameSelect id={0}></this.viewGameSelect>
        <div className="mr-5">
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
        <this.viewGameList></this.viewGameList>
        <br />
      </div>
    );
  }
}

export default GameList;
