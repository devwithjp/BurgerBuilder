import React from 'react';
import burgerLogo from '../../assets/BurgerLogo.png';
import classes from './Logo.css';
const logo = (props) => (
	<div className={classes.Logo} style={{ height: props.height }}>
		<img src={burgerLogo} />
	</div>
);
export default logo;
//Cant directly pass the location to image tag like in normal html as the webpack need
//to know while bundling thus need to import to let webpack knoe
