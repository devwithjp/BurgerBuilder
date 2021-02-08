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
				value: '',
				validation: {
					required: true
				},
				valid: false
			},

			street: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Street'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			postcode: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'ZIPCODE'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			country: {
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Country'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Your E-mail'
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			},
			deliveryMethod: {
				elementType: 'select',
				elementConfig: {
					options: [
						{ value: 'fastest', displayValue: 'Fastest' },
						{ value: 'cheapest', displayValue: 'Cheapest' }
					]
				},
				value: '',
				validation: {
					required: true
				},
				valid: false
			}
		},

		loading: false
	};

	orderHandler = (event) => {
		event.preventDefault();
		// console.log(this.props.ingredients);
		this.setState({ loading: true });
		const formData = {};
		for (let formElementKey in this.state.orderForm) {
			formData[formElementKey] = this.state.orderForm[formElementKey].value;
		}
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			orderData: formData
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

	checkValidity(value, rules) {
		let isValid = true;

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}
		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}
		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		return isValid;
	}

	changedHandler = (event, formElementId) => {
		const orderFormTemp = { ...this.state.orderForm };
		const orderElemTemp = { ...orderFormTemp[formElementId] };
		orderElemTemp.value = event.target.value;
		orderElemTemp.valid = this.checkValidity(orderElemTemp.value, orderElemTemp.validation);
		orderFormTemp[formElementId] = orderElemTemp;
		this.setState({ orderForm: orderFormTemp });
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
						onChange={(event) => this.changedHandler(event, formElement.id)}
						invalid={!formElement.config.valid}
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
