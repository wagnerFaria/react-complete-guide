import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working !</p>
        <Person name="Wagner" age="33" />
        <Person name="Dejaine" age="29">My hobbies: tricotar</Person>
        <Person name="Danilo" age="32" />
      </div>
    );
  }
}

export default App;
