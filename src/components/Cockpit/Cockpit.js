import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red'];
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red'];
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is realy working !</p>
            <button className={btnClass} onClick={props.clicked}>Switch name</button>
        </div>
    );
}

export default cockpit;