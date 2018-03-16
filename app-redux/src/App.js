import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {

  decrement = () => {
    this.props.decrement();
  }

  increment = () => {
    this.props.increment();
  } 

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>{this.props.number}</h1>
        <Button title="Decrementar" action={this.decrement}/>
        <Button title="Incrementar" action={this.increment}/>
      </div>
    );
  }
}

export default App;
