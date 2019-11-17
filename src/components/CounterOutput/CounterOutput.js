import React from 'react';

import classes from './CounterPut.module.css';
//import './CounterOutput.css';


const CounterOutput = (props) => {
	// const style = {
	//     width: "100%",
	//     backgroundColor: "#fa923f",
	//     color: "#fff",
	//     fontSize: "1.8rem",
	//     textAlign: "center",
	//     padding: "20px 0",
	//     boxSizing: "border-box",
	// } 
	return (
	    <div className={classes.CounterOutput}>
	        Current Counter: {props.value}
	    </div>
    );
}

export default CounterOutput;