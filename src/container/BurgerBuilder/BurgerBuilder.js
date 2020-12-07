import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinners/Spinner';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import { withRouter } from 'react-router-dom';

const PRICES = {
	salad: 10,
	bacon: 20,
	meat: 20,
	cheese: 10
};
class BurgerBuilder extends Component {
	state = {
		ingredients: { meat: 0, bacon: 0, salad: 0, cheese: 0 },
		initialPrice: 150,
		purchasable: false,
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		console.log(this.props);
		axios
			.get('https://react-burger-builder-b762c.firebaseio.com/ingredients.json')
			.then((resp) => {
				console.log(resp);
				this.setState({ ingredients: resp.data });
			})
			.catch((error) => {
				this.setState({ error: true });
			});
	}
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
		// console.log(this.props);
		const query = [];
		for (let i in this.state.ingredients) {
			query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		query.push('price=' + this.state.initialPrice);
		const queryString = query.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString
		});
	};
	render() {
		let disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let orderSummary = null;
		let burger = this.state.error ? <p>Ingredients can't be loaded </p> : <Spinner />;
		if (this.state.ingredients) {
			burger = (
				<Fragment>
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
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					order={this.orderHandler}
					orderCancel={this.cancelPurchase}
					price={this.state.initialPrice}
				/>
			);
		}
		if (this.state.loading) {
			orderSummary = <Spinner />;
		}
		return (
			<Fragment>
				<Modal purchasing={this.state.purchasing} cancel={this.cancelPurchase}>
					{orderSummary}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}
export default withErrorHandler(withRouter(BurgerBuilder), axios);
