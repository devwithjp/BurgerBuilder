import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' }
];
const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			<strong>Current price - {props.price.toFixed(2)}</strong>
		</p>
		{controls.map((control) => (
			<BuildControl
				key={control.label}
				label={control.label}
				addIng={() => props.added(control.type)}
				removeIng={() => props.removed(control.type)}
				disabled={props.disable[control.type]}
			/>
		))}
		<button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>
			ORDER NOW
		</button>
	</div>
);
export default buildControls;
