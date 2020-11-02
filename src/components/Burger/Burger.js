import React from 'react';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props) => {
	let orderedIngredients = Object.keys(props.ingredients)
		.map((igKey) => {
			return [ ...Array(props.ingredients[igKey]) ].map((_, i) => {
				return <BurgerIngredient key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, elem) => {
			return arr.concat(elem);
		}, []);
	orderedIngredients.length === 0 ? (orderedIngredients = <p>Please choose ingredients</p>) : null;
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{orderedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};
export default burger;
