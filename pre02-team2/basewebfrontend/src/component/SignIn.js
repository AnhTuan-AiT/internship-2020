import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import { Redirect, useHistory } from "react-router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Bản quyền thuộc về © "}
      <Link color="inherit" href="">
        BKOPT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(12),
    height: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = useState(""); // new State (var) userName
  const [password, setPassword] = useState(""); // new State (var) password
  const [isTyping, setIsTyping] = useState(false);
  const handleUserNameChange = (event) => {
    setIsTyping(true);
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setIsTyping(true);
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTyping(false);
    props.requestLogin(userName, password);
  };
  if (props.isAuthenticated === true) {
    if (history.location.state && history.location.state.from) {
      history.replace(history.location.state.from);
      return null;
    } else
      return (
        <Redirect to={{ pathname: "/", state: { from: history.location } }} />
      );
  } else
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <img
          //alt="Hust"
          //className={classes.avatar}
          //src={process.env.PUBLIC_URL + "/soict-logo.png"}
          /> */}
          <Typography component="h1" variant="h4">
            Đăng nhập
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            {props.errorState === true && isTyping === false ? (
              <Typography variant="overline" display="block" color="error">
                {props.errorMsg}
              </Typography>
            ) : (
              ""
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="user"
              label="Tài khoản"
              name="user"
              onChange={handleUserNameChange}
              error={
                isTyping === false &&
                props.errorState !== null &&
                props.errorState === true
              }
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              error={
                isTyping === false &&
                props.errorState !== null &&
                props.errorState === true
              }
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ tôi!"
            /> */}
            {props.isRequesting === true ? (
              <Button
                disabled={true}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                <CircularProgress /> Đang xử lí
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Đăng nhập
              </Button>
            )}
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href={process.env.PUBLIC_URL + "/user/register"}
                  variant="body2"
                >
                  {"Chưa có tài khoản? Đăng kí."}
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
}
