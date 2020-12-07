import React from 'react';
import classes from './Order.css';
const order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName]
		});
	}

	const ingredientOutput = ingredients.map((ig) => (
		<span
			key={ig.name}
			style={{
				textTransform: 'capitalize',
				display: 'inline-block',
				margin: '0 8px',
				padding: '5px'
			}}
		>
			{ig.name} - {ig.amount}
		</span>
	));
	return (
		<div className={classes.Order}>
			<p>Ingredients:{ingredientOutput}</p>
			<p>
				Price: <strong>INR {props.price}</strong>
			</p>
		</div>
	);
};

export default order;
