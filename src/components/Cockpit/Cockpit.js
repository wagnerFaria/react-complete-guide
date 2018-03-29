import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliary'; //hoc siginifica Highter order component

const cockpit = (props) => {

    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red'];
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red'];
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is realy working !</p>
            <button className={btnClass} onClick={props.clicked}>Switch name</button>
        </Aux>
    );
}

export default cockpit;