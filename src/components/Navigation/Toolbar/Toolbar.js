import React from 'react';
import Logo from '../../Logos/Logo';
import classes from './Toolbar.css';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggler clicked={props.menuClicked} />
		<Logo height="80%" />
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;
