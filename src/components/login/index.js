import React, { Component } from 'react';
import { Grid, withStyles, TextField, Button, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../shared/commonFun';
import { connect } from 'react-redux';
import { authLogin } from '../../redux/actions/loginAction';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const style = (theme) => ({
  root: {
    padding: '10px 4px',
    display: 'flex'
  },
  topMargin: {
    marginTop: "100px"
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
})
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }
  render() {
    const { classes } = this.props;
    const { email, password, error } = this.state;
    const responseFacebook = (response) => {
      this.props.history.push("/home", response)
      console.log(response);
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <Container maxWidth="sm">
        <Grid container justify="center" className="my-16">
          <Grid item xs={12}>
            <Typography variant="h5" component="h6" className="text-center">
              Sign In
            </Typography>
            {error &&
              <p className="text-center text-red-800">{error}</p>
            }
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              value={email}
              type="email"
              name="email"
              autoComplete="email"
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={(e) => this.handleChange(e)}
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              id="outlined-email-input"
              label="Password"
              className={classes.textField}
              type="password"
              value={password}
              fullWidth
              name="password"
              autoComplete="password"
              margin="normal"
              variant="outlined"
              onChange={(e) => this.handleChange(e)}
              required
            />
          </Grid>
          <Grid item xs={12} >
            <Button variant="outlined" fullWidth onClick={(e) => this.handleSubmit(e)} color="primary" className={`${classes.button} uppercase`}>
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FacebookLogin
            appId="799037473930974"
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </Grid>
      </Container>
    )
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillMount() {
    if (getUser()) {
      this.props.history.push('/');
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    var email = this.state.email;
    var password = this.state.password;
    const data = {
      email: email,
      password: password
    }
    const { dispatch } = this.props
    dispatch(authLogin(data))
    this.props.history.push('/');
  }
}
const mapStateToProps = state => {
  return {
    loginState: state.login,
  }
}
export default withStyles(style)(withRouter(connect(mapStateToProps)(Login)));
