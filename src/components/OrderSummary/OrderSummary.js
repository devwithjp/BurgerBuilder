import React, { Component, Fragment } from 'react';
import Button from '../UI/Buttons/Button';
class OrderSummary extends Component {
	// const li = [];
	// for (let keys in props.ingredients) {
	// 	li.push(`${keys} --- ${props.ingredients[keys]}`);
	// }
	// return li.map((item) => <div>{item}</div>);
	// ALternative approach

	componentWillUpdate() {
		console.log('[OrderSummary] updated');
	}
	render() {
		const summary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>---- {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Fragment>
				<h3>Your orders</h3>
				<p>Your burger consists of:</p>
				<ul>{summary}</ul>
				<p>
					<strong>Price - {this.props.price.toFixed(2)}</strong>
				</p>
				<Button buttonType="Danger" clicked={this.props.orderCancel}>
					Cancel
				</Button>
				<Button buttonType="Success" clicked={this.props.order}>
					Order
				</Button>
			</Fragment>
		);
	}
}
export default OrderSummary;
