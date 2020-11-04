import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from './Navigation/Toolbar/Toolbar';
import SideDrawer from './Navigation/SideDrawer/SideDrawer';
import { Fragment } from 'react';

class Layout extends Component {
	state = {
		showSideDrawer: true
	};
	closeSideDraw = () => {
		this.setState({ showSideDrawer: false });
	};
	render() {
		return (
			<Fragment>
				<Toolbar />
				<SideDrawer open={this.state.showSideDrawer} close={this.closeSideDraw} />

				<div>Sidedrawer BAckdrop</div>
				<main className={classes.Content}>{this.props.children}</main>
			</Fragment>
		);
	}
}
export default Layout;
