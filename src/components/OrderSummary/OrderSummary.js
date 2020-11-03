import React, { Fragment } from 'react';
import Button from '../UI/Buttons/Button';
const orderSummary = (props) => {
	// const li = [];
	// for (let keys in props.ingredients) {
	// 	li.push(`${keys} --- ${props.ingredients[keys]}`);
	// }
	// return li.map((item) => <div>{item}</div>);
	// ALternative approach
	const summary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>---- {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Fragment>
			<h3>Your orders</h3>
			<p>Your burger consists of:</p>
			<ul>{summary}</ul>
			<p>
				<strong>Price - {props.price.toFixed(2)}</strong>
			</p>
			<Button buttonType="Danger" clicked={props.orderCancel}>
				Cancel
			</Button>
			<Button buttonType="Success" clicked={props.order}>
				Order
			</Button>
		</Fragment>
	);
};
export default orderSummary;
