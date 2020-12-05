import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Buttons/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>Good choice!!!</h1>
			<div style={{ width: '100%', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
				<Button buttonType="Danger" clicked={props.cancelClicked}>
					CANCEL
				</Button>
				<Button buttonType="Success" clicked={props.continueClicked}>
					CONTINUE
				</Button>
			</div>
		</div>
	);
};

export default checkoutSummary;
