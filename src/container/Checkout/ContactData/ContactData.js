import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinners/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
	state = {
		orderForm: {
			name: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Your Name'
				},
				value: ''
			},

			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: ''
			},
			postcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIPCODE'
				},
				value: ''
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: ''
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-mail'
				},
				value: ''
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					option: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: ''
			}
		},

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
			},
			deliveryMethod: 'fastest'
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
		let formElements = [];
		for (let key in this.state.orderForm) {
			formElements.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}

		let form = (
			<form>
				<h4>Enter details</h4>
				{/* <Input elementType="" elementConfig="" value="" /> */}
				{formElements.map((formElement) => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
					/>
				))}
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
