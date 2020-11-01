import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</Fragment>
		);
	}
}

export default App;
