import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
	state = {
		ingredients: { meat: 2, bacon: 5, salad: 0, cheese: 0 }
	};

	render() {
		return <CheckoutSummary ingredients={this.state.ingredients} />;
	}
}
export default Checkout;
