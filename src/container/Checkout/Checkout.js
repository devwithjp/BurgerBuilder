import React, { Component, Fragment } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {
	state = {
		ingredients: null,
		price: 0
	};
	cancelClickedHandler = () => {
		this.props.history.goBack();
	};
	continueClickedHandler = () => {
		this.props.history.replace(this.props.match.path + '/contact-data');
	};
	componentWillMount() {
		console.log(this.props);
		const queryParams = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let query of queryParams.entries()) {
			//['x','2']
			if (query[0] === 'price') {
				this.setState({ price: query[1] });
			} else {
				ingredients[query[0]] = +query[1];
			}
		}
		this.setState({ ingredients: ingredients });
	}
	render() {
		return (
			<Fragment>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					cancelClicked={this.cancelClickedHandler}
					continueClicked={this.continueClickedHandler}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={(props) => (
						<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />
					)}
				/>
			</Fragment>
		);
	}
}
export default Checkout;
