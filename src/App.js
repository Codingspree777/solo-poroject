import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { todos:[],
                   input:""}
  } 
  add = () => {
    const copy = this.state.todos.slice();
    copy.push(this.state.input)
    this.setState({todos: copy, input: ""})
  }

  change = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  remove = (e) =>{
    const copy = this.state.todos.slice();
    copy.splice(e.target.id, 1);
    this.setState({todos: copy})
  }

  render() {
    
    let items = this.state.todos.map((ele, i)=>{
    return <ul id={i}>{ele}<button id={i} onClick={this.remove}>X</button></ul>
    })
    return (
      <div className="App">
        <header className="App-header">
          <p>
           To-Do-List
          </p>
        </header>
        <input placeholder="Enter todos" onChange={this.change} value={this.state.input}></input>
        <input className= "addTodo"id="form-submit" type="submit" value="Add" onClick={this.add} ></input>
        <br></br>
        {this.state.todos.length === 0 ? "No todos yet!" : "You still have todos"}
        {items}
      </div>
    );
  }
}
console.log("test");

export default App;
