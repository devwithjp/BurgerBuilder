import React, { Fragment } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
	<Fragment>
		<Backdrop show={props.purchasing} clicked={props.cancel} />
		<div
			className={classes.Modal}
			style={{
				transform: props.purchasing ? 'translateY(0)' : 'translateY(-1000vh)',
				opacity: props.purchasing ? '1' : '0'
			}}
		>
			{props.children}
		</div>
	</Fragment>
);

export default modal;
