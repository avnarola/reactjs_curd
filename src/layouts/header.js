import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
//import MenuIcon from '@material-ui/icons/Menu';

const style = (theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
});

// export default function ButtonAppBar() {
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							{/* <MenuIcon /> */}
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							News
						</Typography>
						{/* <NavLink to="/login">Login</NavLink> */}

						<NavLink to="/login"><Button color="inherit">Login</Button></NavLink>
						<NavLink to="/registration"><Button color="inherit">Registration</Button></NavLink>
						<NavLink to="/"><Button color="inherit">Home</Button></NavLink>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(style)(Header);
