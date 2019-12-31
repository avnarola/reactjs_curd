import React, { Component } from 'react';
import Layout from '../../layouts';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { InputBase, Container, Paper, Grid, TextField, TextareaAutosize, Button, withStyles } from '@material-ui/core';
import { border } from '@material-ui/system';
import { sendMailFun } from '../../redux/actions/loginAction';
// import Login from '../login/index'
const style = (theme) => ({

})
class sendMail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fromEmail: "",
      ToEmail: "",
      Subject: "",
      Message: ""
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello => ');
    const mailData = {
      fromEmail: this.state.fromEmail,
      ToEmail: this.state.ToEmail,
      Subject: this.state.Subject,
      Message: this.state.Message
    }
    console.log('mailData => ', mailData);

    const { dispatch } = this.props
    dispatch(sendMailFun(mailData))
    this.props.history.push('/');
  }
  render() {
    const { classes } = this.props
    const { fromEmail, ToEmail, Subject, Message } = this.state
    return (
      <div>
        <Container maxWidth="sm">
          <form onSubmit={(e) => this.handleSubmit(e)} >
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-email-input"
                    label="From"
                    className={classes.textField}
                    value={fromEmail}
                    type="email"
                    name="fromEmail"
                    //autoComplete="from"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-email-input"
                    label="To"
                    className={classes.textField}
                    value={ToEmail}
                    type="email"
                    name="ToEmail"
                    //autoComplete="from"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-email-input"
                    label="Subject"
                    className={classes.textField}
                    value={Subject}
                    type="text"
                    name="Subject"
                    //autoComplete="from"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextareaAutosize
                    style={{ width: "100%", border: "1px solid #e2e8f0", padding: "12px" }}
                    rowsMax={12}
                    name="Message"
                    value={Message}
                    onChange={(e) => this.handleChange(e)}
                    fullWidth
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                  //defaultValue=""
                  />
                </Grid>
                <Grid item xs={12} >
                  <Button type="submit" variant="outlined"
                    fullWidth color="primary"
                    className={`${classes.button} uppercase`}>
                    Send Mail
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // loginState: state.login,
  }
}
export default withStyles(style)(withRouter(connect(mapStateToProps)(sendMail)));
// export default withStyles(style)(withRouter(sendMail));
