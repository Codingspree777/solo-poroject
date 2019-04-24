import React, { Component } from 'react';
import Dishes from './Dishes';
import Main from './Main';
import Iframe from 'react-iframe';

class Chatroom extends Component {
	constructor(props, context){
		super(props, context)
	};



	 render() {
		 let link = this.props.urls["source"]["sourceRecipeUrl"]
		 
		 return (
				<div>
					<Iframe url={link}
        width="80%"
        height="100%"
        className="myClassname"
        display="initial"
        position="relative"/>

				</div>
		 );
	 }
}


export default Chatroom;