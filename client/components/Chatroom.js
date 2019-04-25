import React, { Component } from 'react';
import Dishes from './Dishes';
import Iframe from 'react-iframe';
import Main from './Main';
import Chat from './Chat';


class Chatroom extends Component {
	constructor(props, context){
		super(props, context)
	};

	

	 render() {
		let link = this.props.urls["source"]["sourceRecipeUrl"]
		 
		 return (
				<div id="wrapper">
					<Iframe url={link}
        width="75%"
		height="99%"
		border="solid 5px"
        className="leftcolumn"
        display="initial"
        position="relative"/>
				<Chat messages={this.props.messages} updateMess={this.props.updateMess}></Chat>
				
				</div>
		 );
	 }
}


export default Chatroom;