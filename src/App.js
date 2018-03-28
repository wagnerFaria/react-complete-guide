import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Wagner', age: 33 },
      { name: 'Dejaine', age: 29 },
      { name: 'Danilo', age: 32 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DONT DO THIS this.state.persons[0].name = 'Wagner Faria do Amaral';
    this.setState(
      {
        persons: [
          { name: 'Wagner Faria do Amaral', age: 33 },
          { name: 'Dejaine', age: 29 },
          { name: 'Danilo', age: 33 }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working !</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
