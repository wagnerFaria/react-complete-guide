import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.focus();
        }
    }
    render() {
        console.log('[Person.js] Inside render');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name}! And i'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name}! And i'm {this.props.age}</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ];
    }
}

export default withClass(Person, classes.Person);