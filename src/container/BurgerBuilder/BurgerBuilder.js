import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const PRICES = {
	salad: 10,
	bacon: 20,
	meat: 20,
	cheese: 10
};
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			meat: 0,
			cheese: 0
		},
		initialPrice: 150,
		purchasable: false,
		purchasing: false
	};
	updatePurchasable = (ingredients) => {
		let sum = 0;
		for (let key in ingredients) {
			sum = sum + ingredients[key];
		}

		this.setState({ purchasable: sum > 0 });
		/*Alternate approach */
		// const sum = Object.keys(ingredients).map((igKey) => ingredients[igKey]).reduce((sum, el) => {
		// 	return sum + el;
		// }, 0);
	};

	addIngredient = (type) => {
		const ingredientAdded = this.state.ingredients[type] + 1;
		const updatedIngredients = { ...this.state.ingredients };
		updatedIngredients[type] = ingredientAdded;
		const newPrice = this.state.initialPrice + PRICES[type];
		this.setState({ ingredients: updatedIngredients, initialPrice: newPrice });
		this.updatePurchasable(updatedIngredients);
	};
	removeIngredient = (type) => {
		if (this.state.ingredients[type] >= 0) {
			const ingredientDel = this.state.ingredients[type] - 1;
			const updatedIngredients = { ...this.state.ingredients };
			updatedIngredients[type] = ingredientDel;
			const newdwPrice = this.state.initialPrice - PRICES[type];
			this.setState({ ingredients: updatedIngredients, initialPrice: newdwPrice });
			this.updatePurchasable(updatedIngredients);
		}
	};
	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};
	cancelPurchase = () => {
		this.setState({ purchasing: false });
	};
	orderHandler = () => {
		alert('proceed');
	};
	render() {
		let disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Fragment>
				<Modal purchasing={this.state.purchasing} cancel={this.cancelPurchase}>
					<OrderSummary
						ingredients={this.state.ingredients}
						order={this.orderHandler}
						orderCancel={this.cancelPurchase}
						price={this.state.initialPrice}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					added={this.addIngredient}
					removed={this.removeIngredient}
					disable={disabledInfo}
					price={this.state.initialPrice}
					purchasable={this.state.purchasable}
					ordered={this.purchaseHandler}
				/>
			</Fragment>
		);
	}
}
export default BurgerBuilder;
