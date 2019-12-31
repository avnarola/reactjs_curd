import React, { Component } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Container, Grid, Typography, TextField, Button, withStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Dropzone from 'react-dropzone'
// import DateFnsUtils from '@date-io/date-fns';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
})
class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      city: '',
      selectedDate: '',
      error: ''
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleDateChange = (date) => {
    this.setState({ selectedDate: date })
  };

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    var data = {
      // email: this.state.,
      // password: this.state.,
      // city: this.state.,
      // selectedDate: this.state.,
    }
  }

  render() {
    const { classes } = this.props;
    const { email, password, selectedDate, city, error } = this.state;
    //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    return (
      <Container maxWidth="sm">
        <Grid container justify="center" className="my-16">
          <Grid item xs={12}>
            <Typography variant="h5" component="h6" className="text-center">
              Registration
            </Typography>
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                name="selectedDate"
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                fullWidth
                id="date-picker-inline"
                value={selectedDate}
                onChange={(this.handleDateChange)}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                fullWidth
                name="city"
                onChange={(e) => this.handleChange(e)}
              >
                <MenuItem value="surat">surat</MenuItem>
                <MenuItem value="mumbai">mumbai</MenuItem>
                <MenuItem value="hydrabad">hydrabad</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Dropzone
              onDrop={this.onDrop}
              accept="image/png"
            >
              {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {!isDragActive && 'Click here or drop a file to upload!'}
                  {isDragActive && !isDragReject && "Drop it like it's hot!"}
                  {isDragReject && "File type not accepted, sorry!"}
                </div>
              )}
            </Dropzone>
          </Grid>
          <Grid item xs={12} >
            <Button variant="outlined" fullWidth onClick={(e) => this.handleSubmit(e)} color="primary"
              className={`${classes.button} uppercase`}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
export default withStyles(style)(Registration)
