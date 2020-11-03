import React from 'react';
import Logo from '../../Logos/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<div>MENU</div>
		<Logo />
		<NavigationItems />
	</header>
);

export default toolbar;
