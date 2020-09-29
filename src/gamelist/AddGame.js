import React from "react";
import axios from "axios";

class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userM: "",
      messageU: "",
    };
  }

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

      //Axios

      const commentPost = {
        username: this.state.userM,
        comment: this.state.messageU,
      };

      axios
        .post(`https://127.0.0.1:8000/game/api`, commentPost)
        .then((res) => {
          console.log("ok");
          console.log(res.date);
        })
        .catch((error) => {
          console.log(error);
        });

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

  formAdd = () => {
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
    return (
      <div>
        <this.formAdd></this.formAdd>
      </div>
    );
  }
}

export default AddGame;
