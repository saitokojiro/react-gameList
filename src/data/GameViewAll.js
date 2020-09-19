/*import React from "react";
import gameArticle from "../data/article.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

class GameViewAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: gameArticle,
    };
  }

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
            {gli.devise}
          </li>
        </ul>
        <div className="card-body">
          <Link to={`/game/${gli.id}`}>voirdsqdsq plus</Link>
        </div>
      </div>
    ));
    return <div className="row ml-5">{viewGame}</div>;
  };

  render() {
    return (
      <div>
        <this.viewGameList></this.viewGameList>
      </div>
    );
  }
}
export default GameViewAll;
*/
