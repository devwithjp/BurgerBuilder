import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinners/Spinner';
class ContactData extends Component {
	state = {
		name: '',
		address: {
			street: '',
			postcode: ''
		},

		email: '',
		loading: false
	};

	orderHandler = (event) => {
		event.preventDefault();
		console.log(this.props.ingredients);
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: this.state.name,
				address: this.state.address,
				email: this.state.email
			}
		};
		axios
			.post('/orders.json', order)
			.then((response) => {
				this.setState({ loading: false });
				console.log(response);
			})
			.catch((error) => {
				this.setState({ loading: false });
				console.log(error);
			});
		this.props.history.push('/');
	};

	render() {
		let form = (
			<form>
				<h4>Enter details</h4>
				<input type="text" className={classes.Input} name="name" placeholder="Name" />
				<input type="text" className={classes.Input} name="street" placeholder="Street" />
				<input type="text" className={classes.Input} name="postcode" placeholder="Postcode" />
				<input type="email" className={classes.Input} name="email" placeholder="E-mail" />
				<Button buttonType="Success" clicked={this.orderHandler}>
					Order
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return <div className={classes.ContactData}>{form}</div>;
	}
}
export default ContactData;
