import React, { Fragment } from 'react';
import Logo from '../../Logos/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
	let drawerClasses = [ classes.SideDrawer, classes.Close ];
	if (props.open) {
		drawerClasses = [ classes.SideDrawer, classes.Open ];
	}
	return (
		<Fragment>
			<Backdrop show={props.open} clicked={props.close} />
			<div className={drawerClasses.join(' ')}>
				<Logo height="11%" />
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
	);
};
export default sideDrawer;
