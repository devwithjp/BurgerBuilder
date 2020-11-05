import React, { Fragment, Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.purchasing !== this.props.purchasing;
	}
	componentDidUpdate() {
		console.log('[Modal] Updated');
	}
	render() {
		return (
			<Fragment>
				<Backdrop show={this.props.purchasing} clicked={this.props.cancel} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.purchasing ? 'translateY(0)' : 'translateY(-1000vh)',
						opacity: this.props.purchasing ? '1' : '0'
					}}
				>
					{this.props.children}
				</div>
			</Fragment>
		);
	}
}

export default Modal;
