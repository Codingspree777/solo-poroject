import React, { Component } from "react";
import Dishes from "./Dishes";
import Chatroom from "./Chatroom";
import Chat from "./Chat";
const axios = require("axios");

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.change = this.change.bind(this);
    this.clicked = this.clicked.bind(this);
    this.chatRoom = this.chatRoom.bind(this);
    this.pMessage = this.pMessage.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.fire = this.fire.bind(this);
    this.state = {
      urls: [],
      messages: [],
      user: "",
      cuisine: "",
      dish: "",
      cuisineVal: {
        American: "cuisine^cuisine-american",
        "Kid-Friendly": "cuisine^cuisine-kid-friendly",
        Italian: "cuisine^cuisine-italian",
        Asian: "cuisine^cuisine-asian",
        Mexican: "cuisine^cuisine-mexican",
        "Southern & Soul Food": "cuisine^cuisine-southern",
        French: "cuisine^cuisine-french",
        Southwestern: "cuisine^cuisine-southwestern",
        Barbecue: "cuisine^cuisine-barbecue-bbq",
        Indian: "cuisine^cuisine-indian",
        Chinese: "cuisine^cuisine-chinese",
        "Cajun & Creole": "cuisine^cuisine-cajun",
        Mediterranean: "cuisine^cuisine-mediterranean",
        Greek: "cuisine^cuisine-greek",
        English: "cuisine^cuisine-english",
        Spanish: "cuisine^cuisine-spanish",
        Thai: "cuisine^cuisine-thai",
        German: "cuisine^cuisine-german",
        Moroccan: "cuisine^cuisine-moroccan",
        Irish: "cuisine^cuisine-irish",
        Japanese: "cuisine^cuisine-japanese",
        Cuban: "cuisine^cuisine-cuban",
        Hawaiian: "cuisine^cuisine-hawaiian",
        Swedish: "cuisine^cuisine-swedish",
        Portuguese: "cuisine^cuisine-portuguese"
      },
      clicked: false,
      clicked2: false,
      redirect: false,
      message: ""
    };
  }

  handleChange(e) {
    event.preventDefault();
    this.setState({
      cuisine: e.target.value
    });
  }

  change(e) {
    this.setState({
      user: e.target.value
    });
  }

  clicked() {
    fetch(
      `http://api.yummly.com/v1/api/recipes?_app_id=b748a53f&_app_key=6b1d513aedbeea9f27ace38ae4bce109&allowedCuisine[]=${this.state.cuisine}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ urls: data, clicked: true });
      });
  }

  chatRoom(e) {
    fetch(
      `http://api.yummly.com/v1/api/recipe/${e.target.value}?_app_id=b748a53f&_app_key=6b1d513aedbeea9f27ace38ae4bce109`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ urls: data, clicked2: true });
      });
    fetch(`http://slack-server.elasticbeanstalk.com/messages`)
      .then(response => response.json())
      .then(data2 => {
        this.setState({ messages: data2, redirect: true });
      });
  }

  pMessage(e) {
    this.setState({
      created_by: this.state.user,
      message: e.target.value
    });
  }

  fire() {
    axios.post("http://slack-server.elasticbeanstalk.com/messages", {
      created_by: this.state.user,
      message: this.state.message
    });
  }

  updateChat() {
    fetch(`http://slack-server.elasticbeanstalk.com/messages`)
      .then(response => response.json())
      .then(data2 => {
        this.setState({ messages: data2 });
      });
  }
  render() {
    //console.log(this.state.clicked);
    //console.log(this.state.cuisine);
    // // console.log(this.state.user);
    //console.log(this.state.urls);
    //console.log(this.state.messages, "main")

    const keyVal = Object.entries(this.state.cuisineVal);
    const selectOpts = keyVal.map((ele, ind) => {
      return (
        <option id={ind} value={ele[1]}>
          {ele[0]}
        </option>
      );
    });
    if (!this.state.clicked) {
      return (
        <div id="frontPage">
          <div id="join">
            <input onChange={this.change} id="input" placeholder="Name" />
            <select
              value={this.state.cuisine}
              onChange={this.handleChange}
              id="dropdown"
            >
              {selectOpts};
            </select>
            <button onClick={this.clicked} id="joinbutton">
              Join
            </button>
          </div>
        </div>
      );
    } else if (this.state.clicked2 === false && this.state.redirect === false) {
      return (
        <Dishes
          cuisines={this.state.cuisine}
          urls={this.state.urls}
          chatRoom={this.chatRoom}
          messages={this.state.messages}
          updateChat={this.updateChat}
        />
      );
    } else {
      return (
        <Chatroom
          urls={this.state.urls}
          messages={this.state.messages}
          pMessage={this.pMessage}
          postMessage={this.state.postMessage}
          fire={this.fire}
          updateChat={this.updateChat}
        >
        </Chatroom>
      );
    }
  }
}

export default Main;
