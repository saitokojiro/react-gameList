import React from "react";
import Home from "../Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLog: "",
      userPass: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let messageObject = [];

    let getuser = JSON.parse(localStorage.getItem(`user/account`));
    if (getuser === null) {
      messageObject.push({
        userLog: this.state.userLog,
        userPass: this.state.userPass,
      });

      let messageJson = JSON.stringify(messageObject);

      localStorage.setItem(`user/account`, messageJson);
      console.log("created");
    } else {
      //storage + Array
      messageObject.push({
        userLog: this.state.userLog,
        userPass: this.state.userPass,
      });
      console.log("not exist");
      let messageJson = JSON.stringify(messageObject);
      localStorage.setItem(`user/account`, messageJson);
    }

    this.setState({
      userLog: "",
      userPass: "",
    });

    console.log("ok");
    //event.preventDefault();
    window.location.href = "/";
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="userLog" className="col-sm-2">
              UserName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="userLog"
                className="form-control"
                id="userLog"
                placeholder="your userLog"
                value={this.state.userLog}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="userPass" className="col-sm-2">
              your message
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="userPass"
                className="form-control"
                id="userPass"
                placeholder="userPass"
                value={this.state.userPass}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default Login;
