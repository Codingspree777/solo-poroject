import React, { Component } from 'react';
import Main from './Main';


class Dishes extends Component {
  constructor(props, context){
    super(props, context);
  
};

  render(){
    let recipeID = [];
    let imageLinks = [];
    let recipeName = [];

    for(let i = 0; i < this.props.urls["matches"].length; i++){
      recipeID.push(this.props.urls["matches"][i]["id"])
      imageLinks.push(this.props.urls["matches"][i]["imageUrlsBySize"])
      recipeName.push(this.props.urls["matches"][i]["recipeName"])
    }
    //console.log(recipeID);
    let images = [];
    for(let k = 0; k < imageLinks.length; k++){
      images.push(<img src={imageLinks[k][90]} id={k} />)
    }
    const name = recipeName.map((ele, ind)=>{
      return <p>{ele}</p>
    })
    return (
      <div>
      {images}
    </div>
    )
   
  } 
}


export default Dishes;