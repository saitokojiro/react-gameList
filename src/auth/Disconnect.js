import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";
import Home from "../Home";

class Disconnect extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteLog = () => {
    console.log("ok");
    localStorage.removeItem("user/account");
    window.location.href = "/";
  };
  render() {
    return (
      <button
        className="btn btn-secondary btn-lg mr-2 ml-2"
        onClick={this.deleteLog}
      >
        log out
      </button>
    );
  }
}

export default Disconnect;
