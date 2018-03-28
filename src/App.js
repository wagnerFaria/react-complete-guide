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
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DONT DO THIS this.state.persons[0].name = 'Wagner Faria do Amaral';
    this.setState(
      {
        persons: [
          { name: newName, age: 33 },
          { name: 'Dejaine', age: 29 },
          { name: 'Danilo', age: 33 }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Wagner', age: 33 },
          { name: event.target.value, age: 29 },
          { name: 'Danilo', age: 32 }
        ]
      }
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Wagner Amaral')}
            changed={this.nameChangedHandler}>
            My Hobbies: Tricotar
        </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working !</p>
        {/* ESTA FORMA DE PASSAR PARAMETROS PARA UM METODO EH INEFICIENTE */}
        <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
  }
}

export default App;
