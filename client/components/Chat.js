import React, { Component } from 'react';
import Main from './Main';
import Dishes from './Dishes';
import Chatroom from './Chatroom';


class Chat extends Component {
	constructor(props, context){
        super(props, context);
        this.state = {
            messages: []
        }
    };
    //slice every 50 messages
    parseData(data) {
        let msg = data.slice(-50);
        if (_.isEqual(msg, this.state.messages)) return;
        this.setState({ messages: msg });
    }

    getData() {
         let that = this;
         fetch('/messages')
         .then(response => response.json())
        .then(data =>{
           that.parseData
        });
        // $.get(this.props.url).done(function(data) {
        //   that.parseData(data);
        // });
        setTimeout(that.getData, that.props.pollInterval);
      }

    componentDidMount() {
        this.getData()
      }

    render(){
        return (
            <div id="chatwindow">HI</div>
        )
    }

}

export default Chat;