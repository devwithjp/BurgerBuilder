import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props) => {
	return (
		<div className={classes.BuildControl}>
			<div className={classes.Label}>{props.label}</div>
			<button className={classes.Less} onClick={props.removeIng} disabled={props.disabled}>
				Less
			</button>
			<button className={classes.More} onClick={props.addIng}>
				More
			</button>
			{console.log(props.addIngredient)}
		</div>
	);
};

export default buildControl;
