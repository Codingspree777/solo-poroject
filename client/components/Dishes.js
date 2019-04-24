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
    let select = [];

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
   
    let l = 0;
    let m = 0;
    while(l < recipeName.length && m < recipeID.length){
      select.push(<p>{recipeName[l]} <button value={recipeID[m]} onClick={this.props.chatRoom}>select</button></p>)
      l++;
      m++;
    }
    return (
      <div>
        {images}
        <div>
          {select}
          </div>
        </div>
    )
   
  } 
}


export default Dishes;