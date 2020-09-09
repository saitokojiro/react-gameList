import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import gameArticle from "./../data/article.json";
import "./../index.css";

class GameViewSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: gameArticle,
      idParams: this.props.match.params.id,
    };
  }

  viewGameSelect = () => {
    const { gameId } = this.state;
    //console.log(gameId);
    for (let i = 0; i < gameId.length; i++) {
      console.log(gameId[i].id === parseInt(this.state.idParams));

      console.log(this.state.idParams + 1);

      if (gameId[i].id === parseInt(this.state.idParams)) {
        console.log("ok");
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
  render() {
    //console.log(this.match);
    return (
      <div className="App container">
        <div className=" ml-5">
          <br />
          <Link to="/Game">
            <button className="btn btn-secondary btn-lg mr-2 ml-2">Back</button>
          </Link>
          <br />
          <br />
          <this.viewGameSelect></this.viewGameSelect>
        </div>
      </div>
    );
  }
}

export default GameViewSelected;
