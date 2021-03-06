import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import gameArticle from "../data/article.json";
//import GameViewAll from "./GameViewAll";
import ButtonSort from "./ButtonSort";
import "./../App.css";
import axios from "axios";
import AddGame from "./AddGame";
import Disconnect from "../auth/Disconnect";

export class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      gameId: gameArticle,
      isOldestFirst: true,
    };
  }

  componentDidMount = () => {
    axios.get(`https://127.0.0.1:8000/games/api`).then((res) => {
      const persons = res.data;
      console.log(persons);
      this.setState({ gameList: persons });
    });
  };

  sortGameToOldDate = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      //gameList: newGameList.sort((a, b) => a.date.years > b.date.years),
      gameList: newGameList.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA - dateB;
      }),
    });
  };

  sortGameToNewDate = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      //gameList: newGameList.sort((a, b) => a.date.years < b.date.years),
      gameList: newGameList.sort((a, b) => {
        let dateB = new Date(a.date);
        let dateA = new Date(b.date);
        return dateA - dateB;
      }),
    });
  };

  sortGameAlphabetically = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => {
        let GameA = a.name.toLowerCase(),
          GameB = b.name.toLowerCase();
        if (GameA < GameB) return -1;
        //if (GameA > GameB) return 1;
      }),
    });
  };

  sortGameLowPrice = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.price - b.price),
    });
  };

  sortGameHighPrice = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => b.price - a.price),
    });
  };

  sortReset = (e) => {
    const { gameList } = this.state;

    let newGameList = gameList.reverse();
    console.log(gameList);
    this.setState({
      gameList: newGameList.sort((a, b) => a.id - b.id),
    });
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
          <li className="list-group-item">{gli.date}</li>
          <li className="list-group-item">{gli.platform}</li>
          <li className="list-group-item" key={index}>
            {gli.price + " "}
            {gli.devise}
          </li>
        </ul>
        <div className="card-body">
          <Link to={`/game/${gli.id}`}>voir plus</Link>
        </div>
      </div>
    ));
    return <div className="row ml-5">{viewGame}</div>;
  };

  render() {
    return (
      <div className="App container">
        <br />

        <div className="mr-5">
          <Link to="/">
            <button className="btn btn-secondary btn-lg mr-2 ml-2">Home</button>
          </Link>
          <Disconnect></Disconnect>
          <Link to="/addgame">
            <button className="btn btn-secondary btn-lg mr-2 ml-2">
              Add new game
            </button>
          </Link>
        </div>

        <br />
        <br />
        <ButtonSort
          sortReset={this.sortReset}
          sortGameToNewDate={this.sortGameToNewDate}
          sortGameToOldDate={this.sortGameToOldDate}
          sortGameAlphabetically={this.sortGameAlphabetically}
          sortGameLowPrice={this.sortGameLowPrice}
          sortGameHighPrice={this.sortGameHighPrice}
        ></ButtonSort>
        <this.viewGameList></this.viewGameList>

        <br />
      </div>
    );
  }
}

export default GameList;
