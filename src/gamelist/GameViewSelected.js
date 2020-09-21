import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import gameArticle from "./../data/article.json";
import "./../index.css";
import axios from "axios";

class GameViewSelected extends React.Component {
  userData;
  constructor(props) {
    super(props);
    this.state = {
      //gameId: gameArticle,
      gameId: { Comment: [{ id: null }] },

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

    console.log(this.state.gameId.name);
    //for (let i = 0; i < gameId.length; i++) {
    //console.log(gameId.id === parseInt(this.state.idParams));

    console.log(this.state.idParams + 1);

    //if (gameId.id === parseInt(this.state.idParams)) {

    /*
    
    <li className="list-group-item">
            {gameId.date.day +
              " - " +
              gameId.date.months +
              " - " +
              gameId.date.years}
          </li>

    */
    console.log("ok");
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
    //}
    //}
  };

  viewMessage = () => {
    // console.log(this.state.gameId.Comment);

    const { gameId } = this.state;

    /*
    console.log(`${localStorage.key(0)}: ${localStorage.getItem(5)}`);
    let getuser = JSON.parse(
      localStorage.getItem(`user/${this.state.idParams}`)
    );*/
    //let Objs = Object.values(CommentId);
    console.log(gameId.Comment);
    //debugger;
    if (gameId !== null) {
      /*//let messageList = gameId.map((msglist) => (
      <div className="mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              User : <br />
              {msglist.userM}
            </h5>
            <p className="card-text">
              message : <br />
              {msglist.messageU}
            </p>
            <p className="card-text">
              <small className="text-muted">
                ID page : {msglist.idPage} and Id Message: {msglist.idMessage}
              </small>
            </p>
          </div>
        </div>
      </div>;
      // ));
*/
      //return <div className="">{messageList}</div>;
      return <div className="">ok</div>;
    } else {
      return <div className=""></div>;
    }

    // }
  };

  componentDidMount() {}

  handleSubmit = (event) => {
    let messageObject = [];

    console.log(this.state.idParams);
    let getuser = JSON.parse(
      localStorage.getItem(`user/${this.state.idParams}`)
    );
    if (getuser === null) {
      messageObject.push({
        idPage: parseInt(this.state.idParams),
        idMessage: 1,
        userM: this.state.userM,
        messageU: this.state.messageU,
      });

      let messageJson = JSON.stringify(messageObject);

      localStorage.setItem(`user/${this.state.idParams}`, messageJson);
    } else {
      //storage + Array

      for (let i = 0; i < getuser.length; i++) messageObject.push(getuser[i]);
      messageObject.push({
        idPage: parseInt(this.state.idParams),
        idMessage: getuser.length + 1,
        userM: this.state.userM,
        messageU: this.state.messageU,
      });
      let messageJson = JSON.stringify(messageObject);

      localStorage.setItem(`user/${this.state.idParams}`, messageJson);
    }

    this.setState({
      idMessage: "",
      userM: "",
      messageU: "",
    });

    event.preventDefault();
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
    //console.log(this.match)<this.viewGameSelect></this.viewGameSelect>;
    //console.log(this.state.gameIds);
    this.viewGameSelect();
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
