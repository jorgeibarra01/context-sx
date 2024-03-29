import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
// import firebase from '../../utils/firebaseconfig'


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function Login(props) {
  const [ email, setEmail ]  = useState(''); 
  const [ password, setPassword ] = useState(''); 
    console.log('firebase', props)
  const {signInEmailAndPassword } = props.firebase; 
  const { classes } = props;

  const handleSubmit = async () => { 
      signInEmailAndPassword(email, password).then(bleh=>{ 
        props.firebase.setLoggedIn(); 
        props.history.push('/test')
      }).catch( error => console.log('Error Signing In', error)); 
    }
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form action="/" method="POST" onSubmit={(e) => { e.preventDefault(); handleSubmit(email, password);  } }>
        {/* <form className={classes.form} onSubmit={bleh => console.log('on submit', bleh)} > */}
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input value={email} onChange={e => setEmail(e.target.value)} id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}


export default withStyles(styles)(Login);