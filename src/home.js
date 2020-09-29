import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Disconnect from "./auth/Disconnect";

import GameViewSelected from "./gamelist/gamelistselected/GameViewSelected";
class Home extends React.Component {
  render() {
    return (
      <div>
        hello world <br></br>
        <br />
        <br />
        <br />
        <Disconnect></Disconnect>
        <br />
        <br />
        <Link to="/Game">
          <button className="btn btn-secondary btn-lg mr-2 ml-2">
            Game List
          </button>
        </Link>
      </div>
    );
  }
}
export default Home;
