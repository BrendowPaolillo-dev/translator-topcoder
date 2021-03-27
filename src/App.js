import './App.css';
import React, {Component, Text}from "react";
import api from "./services/api"

class App extends Component{
  state = {
    text: "",
    response: ""
  }
  
  handleText(texto){
    this.setState({text: texto})
    console.log(api)
  }


  render(){
    return (
      <div className="App">
        <input className ="entrada" placeholder = "Digite aqui" onChange = {(e)=> this.handleText(e.target.value)}
        ></input>
        <h1>{this.state.response}</h1>
      </div>
    );
  }
}

export default App;
