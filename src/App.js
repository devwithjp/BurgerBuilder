import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from './container/Orders/Orders';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<Switch>
						<Route path="/checkout" component={Checkout} />
						<Route path="/orders" component={Orders} />
						<Route path="/" exact component={BurgerBuilder} />
					</Switch>
				</Layout>
			</Fragment>
		);
	}
}

export default App;
