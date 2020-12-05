import React, { Component } from 'react';
import Button from '../../../components/UI/Buttons/Button';
import classes from './ContactData.css';
class ContactData extends Component {
	state = {
		name: '',
		address: {
			street: '',
			postcode: ''
		},

		email: ''
    };
    
    orderHandler(){
        
    }

	render() {
		return (
			<div className={classes.ContactData}>
				<form>
					<h4>Enter details</h4>
					<input type="text" className={classes.Input} name="name" placeholder="Name" />
					<input type="text" className={classes.Input} name="street" placeholder="Street" />
					<input type="text" className={classes.Input} name="postcode" placeholder="Postcode" />
					<input type="email" className={classes.Input} name="email" placeholder="E-mail" />
					<Button buttonType="Success" clicked={}>Order</Button>
				</form>
			</div>
		);
	}
}
export default ContactData;
