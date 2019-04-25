import React, { Component } from 'react';
import Main from './Main';
import Dishes from './Dishes';
import Chatroom from './Chatroom';
const axios = require('axios');


class Chat extends Component {
	constructor(props, context){
        super(props, context);
    };
    //slice every 50 messages
    // parseData(data) {
    //     let msg = data.slice(-50);
    //     if (_.isEqual(msg, this.state.messages)) return;
    //     this.setState({ messages: msg.concat(data) });
    // }

    // getData() {
    //      let that = this;
    //      axios.get("/messages")
    //      .then(function(response) {
    //          console.log(response)
    //        that.parseData(response);
    //      })
    //      .catch(function(err) {s
    //        console.log("There was an error?! ", err);
    //      });
    //     //setTimeout(that.getData, that.props.pollInterval);
    //   }

  // componentDidMount() {
  //       //this.getData() 
	// 	axios.get("http://slack-server.elasticbeanstalk.com/messages")
	// 	.then(function(response) {
	// 				this.updateMess(response.data)
	// 	})
	// 	.catch(function(err) {
	// 		console.log("There was an error! ", err);
	// 	});
	// 	}
	
		
    render(){
				let msgLines = []
				let copy = this.props.messages.slice()
				for(let i = copy.length-200; i > 0; i--){
				msgLines.push(<p>user: {copy[i]["created_by"]}	</p>)
				msgLines.push(<p>message: "{copy[i]["message"]}"</p>)
				msgLines.push(<p>created: "{copy[i]["created_at"]}"</p>)
				}
				
        return (
            <div id="chatwindow">
            <ul>{msgLines}</ul>
						<br></br>
						<div>
						<input id="postbox" onChange={this.props.pMessage}></input>
						<button id="postbutton" onClick={this.props.fire}>Post</button>
						</div>
            </div>
        )
    }

}

export default Chat;