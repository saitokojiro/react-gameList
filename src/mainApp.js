import React from "react";
import logo, { ReactComponent } from "./logo.svg";
import gameArticle from "./data/article.json";
import "./App.css";

let gameItems = [
  { index: 1, title: "one" },
  { index: 2, title: "two" },
  { index: 3, title: "three" },
  { index: 4, title: "for" },
];

let gemeItemsEmpty = [];
/*
function YourAlert() {
  gameItems.sort(function (a, b) {
    return a.title > b.title;
  });
  console.log(gameItems);
  return gameItems;
}

function Yourapp(props) {
  let gameItems = props.gameItem;
  let yalert = new YourAlert();

  let Glist = gameItems.map((gli) => (
    <li className={gli.id} key={gli.id}>
      "{gli.name} " and {}
      <a href={gli.name}>voir</a>
    </li>
  ));

  return (
    <div>
      <ul>{Glist}</ul>
      <button onClick={YourAlert}>sort</button>
    </div>
  );
}
*/
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
      gameList: newGameList.sort((a, b) => a.date < b.date),
    });
  };

  sortGameToNewDate = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.date > b.date),
    });
  };

  viewGameList = () => {
    const { gameList } = this.state;
    let viewGame = gameList.map((gli) => (
      <div
        className="card col-sm-5 m-2"
        style={{ width: 10 + "rem" }}
        key={gli.id}
      >
        <img src={gli.img} className="img-thumbnail" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{gli.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{gli.date}</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href={gli.id} className="card-link">
            Card link
          </a>
        </div>
      </div>
    ));
    return <div className="row center">{viewGame}</div>;
  };

  render() {
    return (
      <div className="App container">
        <span>hello</span>
        <br />
        <button onClick={this.sortGameToOldDate}>sort new to old</button>
        <button onClick={this.sortGameToNewDate}>sort old to new</button>
        <br />
        <this.viewGameList />
      </div>
    );
  }
}

export default App;
