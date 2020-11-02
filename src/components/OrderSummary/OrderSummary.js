import React, { Fragment } from 'react';

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
			<h3>Your order</h3>
			<p>Your burger consists of:</p>
			<ul>{summary}</ul>
		</Fragment>
	);
};
export default orderSummary;
