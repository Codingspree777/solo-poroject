import React, { Component } from 'react';

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      cuisine:"",
      urls: [],
      dish: "",
      cuisineVal:  {
        American: "cuisine^cuisine-american",
        "Kid-Friendly": "cuisine^cuisine-kid-friendly",
        Italian: "cuisine^cuisine-italian",
        Asian: "cuisine^cuisine-asian",
        Mexican: "cuisine^cuisine-mexican",
        "Southern & Soul Food":"cuisine^cuisine-southern",
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
        Portuguese: "cuisine^cuisine-portuguese",
      },
    }
  }

  // componentDidMount() {
  //   fetch("http://api.yummly.com/v1/api/metadata/cuisine?_app_id=b748a53f&_app_key=6b1d513aedbeea9f27ace38ae4bce109")
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({urls: data})
  //   })
  // }
  
  
  handleChange(e) {
      this.setState({
        cuisine: e.target.value
      })
    }



  render() {
    console.log(this.state.cuisine);
    const keyVal = Object.entries(this.state.cuisineVal);
    const selectOpts = keyVal.map((ele, ind)=>{
      return <option id={ind} value={ele[1]}>{ele[0]}</option>
    })

    return (
      <div>
        <input></input>
        <select value={this.state.cuisine} onChange={this.handleChange}>
          {selectOpts};
        </select>
      </div>
    );
  }


}

export default App;

