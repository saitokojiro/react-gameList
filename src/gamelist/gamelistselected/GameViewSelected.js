import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import gameArticle from "./../../data/article.json";
import "./../../index.css";
import axios from "axios";
import Disconnect from "../../auth/Disconnect";

class GameViewSelected extends React.Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      //gameId: gameArticle,
      gameId: { Comment: [{ id: null, username: null, Comment: null }] },

      idParams: this.props.match.params.id,

      idPage: this.props.match.params.id,
      idMessage: "",
      userM: "",
      messageU: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://127.0.0.1:8000/game/${this.props.match.params.id}/api`)
      .then((res) => {
        const persons = res.data;
        //console.log(persons.Comment);
        console.log("ok");
        this.setState({
          gameId: res.data,
        });
      });
  };

  viewGameSelect = () => {
    const { gameId } = this.state;
    return (
      <div
        className="card mx-auto"
        style={{ width: 50 + "rem" }}
        key={gameId.id}
      >
        <img
          src={gameId.img}
          className="img-thumbnail"
          alt="..."
          style={{ width: 80 + "%", margin: "auto" }}
        />

        <div className="card-body">
          <h5 className="card-title">{gameId.name}</h5>
          <p className="card-text">{gameId.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{gameId.date}</li>
          <li className="list-group-item">{gameId.platform}</li>
          <li className="list-group-item">
            {gameId.price + " "}
            {gameId.devise}
          </li>
        </ul>
      </div>
    );
  };

  viewMessage = () => {
    const { gameId } = this.state;
    if (gameId.Comment !== null) {
      let messageList = gameId.Comment.map((msglist) => (
        <div className="mx-auto" key={msglist.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Username : {msglist.username}</h5>
              <p className="card-text">
                message : <br />
                {msglist.Comment}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  ID page : {this.state.idParams} and Id Message: {msglist.id}
                </small>
              </p>
            </div>
          </div>
        </div>
      ));

      return <div className="">{messageList}</div>;
    } else {
      return <div className=""></div>;
    }
  };

  handleSubmit = (event) => {
    //Axios
    /*
    const commentPost = {
      username: this.state.userM,
      comment: this.state.messageU,
    };

    const headers = {
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://127.0.0.1:8000",
    };
    delete axios.defaults.headers.common["Content-Length"];
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    axios
      .post(
        `https://127.0.0.1:8000/game/${this.props.match.params.id}/comment/api`,
        { username: this.state.userM, comment: this.state.messageU },
        { headers: headers }
      )
      .then((res) => {
        console.log("ok");
        console.log(res.date);
      })
      .catch((error) => {
        console.log(error);
      });
*/
    (async () => {
      const rawResponse = await fetch(
        `https://127.0.0.1:8000/game/${this.props.match.params.id}/comment/api`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.userM,
            comment: this.state.messageU,
          }),
        }
      );
      const content = await rawResponse.json();

      console.log(content);
    })();

    /*
    this.setState({
      idMessage: "",
      userM: "",
      messageU: "",
    });
*/
    //event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(event.target.name, event.target.value);
  };

  AddMessage = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="UserName" className="col-sm-2">
              UserName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="userM"
                className="form-control"
                id="UserName"
                placeholder="your username"
                value={this.state.userM}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="messageU" className="col-sm-2">
              your message
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="messageU"
                className="form-control"
                id="messageU"
                placeholder="message..."
                value={this.state.messageU}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };

  render() {
    this.viewGameSelect();
    return (
      <div className="App container">
        <div className=" ml-5">
          <br />
          <Link to="/Game">
            <button className="btn btn-secondary btn-lg mr-2 ml-2">Back</button>
          </Link>
          <Disconnect></Disconnect>
          <br />
          <br />
          <this.viewGameSelect></this.viewGameSelect>
          <br />
          <br />
          <this.viewMessage></this.viewMessage>
          <br />
          <br />
          <this.AddMessage></this.AddMessage>
        </div>
      </div>
    );
  }
}

export default GameViewSelected;
