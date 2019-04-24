import React, { Component } from 'react';
import Dishes from './Dishes';
import Main from './Main';

class Chatroom extends Component {
	constructor(props, context){
		super(props, context)
	};



	 render() {
		 let link = this.props.urls["source"]["sourceRecipeUrl"]
		 
		 return (
			 <div>
			<section>
				 <a href= {link}>click</a>
				</section>
				</div>
		 );
	 }
}


export default Chatroom;