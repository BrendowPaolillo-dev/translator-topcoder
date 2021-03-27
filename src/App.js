import './App.css';
import React, {Component, Text}from "react";
import requestData from "./services/api"

class App extends Component{
  state = {
    text: "",
    response: ""
  }
  
  handleText(texto){
    this.setState({text: texto})
  }

  submitText = () => {
    console.log(this.state.text)
    // console.log(requestData(this.state.text))
  }


  render(){
    return (
      <div className="App">
        <input className ="entrada" placeholder = "Digite aqui" onChange = {(e)=> this.handleText(e.target.value)}></input>
        <button onClick = {this.submitText}>paudothiago</button>
        <h1>{this.state.response}</h1>
      </div>
    );
  }
}

export default App;
