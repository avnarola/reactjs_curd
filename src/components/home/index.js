import React, { Component } from 'react';
import Layout from '../../layouts';
import { withRouter } from 'react-router-dom';
import { InputBase, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import SendMail from '../sendMail';
// import Login from '../login/index'
const style = (theme) => ({
})
class Home extends Component {
	render() {
		console.log('this.props => ', this.props);

		const { classes } = this.props
		return (
			<div>
				<Container maxWidth="sm">
					{/* <SendMail /> */}
				</Container>
			</div>
		);
	}
}
export default withStyles(style)(withRouter(Home));
